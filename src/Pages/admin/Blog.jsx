import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Calendar,
  Upload,
  X,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import AdminSidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { uploadImageToCloudinary } from "../../utils/cloudinaryUpload";

const BlogManager = ({ setIsAdminLoggedIn }) => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Ref for the contentEditable div
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    date: "",
    imageUrl: "",
  });

  useEffect(() => {
    const blogsQuery = query(
      collection(db, "blogs"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      blogsQuery,
      (snapshot) => {
        const docs = snapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        setBlogs(docs);
        setIsLoading(false);
      },
      (error) => {
        console.error("Failed to load blogs:", error);
        setErrorMessage("Unable to load Blog from Firebase. Please refresh.");
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setAttribute("dir", "ltr");
      editorRef.current.style.direction = "ltr";
    }
  }, []);
  useEffect(() => {
    if (editorRef.current) {
      console.log(
        "Editor direction:",
        getComputedStyle(editorRef.current).direction
      );
      console.log(
        "Editor dir attribute:",
        editorRef.current.getAttribute("dir")
      );
    }
  }, [showForm]);

  useEffect(() => {
    if (showForm && editorRef.current) {
      editorRef.current.innerHTML = formData.content || "";
    }
  }, [showForm, editId, formData.content]);

  const makeSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSaving) return;

    const user = auth.currentUser;
    if (!user) {
      setErrorMessage("Your session has expired. Please log in again.");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    try {
      const richContent = editorRef.current
        ? editorRef.current.innerHTML
        : formData.content;
      const publishDate =
        formData.date ||
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

      let imageUrl = formData.imageUrl;
      if (imageFile) {
        const uploadResult = await uploadImageToCloudinary(imageFile);
        imageUrl = uploadResult.url;
      }

      const payload = {
        title: formData.title.trim(),
        author: formData.author.trim(),
        content: richContent,
        date: publishDate,
        slug: makeSlug(formData.title.trim()),
        imageUrl,
        status: "active",
        user: user.uid,
      };

      if (editId) {
        await updateDoc(doc(db, "blogs", editId), {
          ...payload,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, "blogs"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
    } catch (error) {
      console.error("Failed to save blog:", error);
      setErrorMessage("Unable to save Blog. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", author: "", content: "", date: "", imageUrl: "" });
    setImagePreview(null);
    setImageFile(null);
    setErrorMessage("");
    setShowForm(false);
    setEditId(null);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title || "",
      author: blog.author || "",
      content: blog.content || "",
      date: blog.date || "",
      imageUrl: blog.imageUrl || "",
    });
    setImagePreview(blog.imageUrl || null);
    setImageFile(null);
    setEditId(blog.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    // 1. Check if user is authenticated
    if (!auth.currentUser) {
      setErrorMessage("Authentication lost. Please reload the page or log in again.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "blogs", id));
      // Success - no explicit state update needed as onSnapshot handles it
    } catch (error) {
      console.error("Failed to delete blog:", error);
      if (error.code === 'permission-denied') {
        setErrorMessage("Permission denied. Check if you are logged in and have admin rights.");
      } else {
        setErrorMessage("Unable to delete this Blog. Please try again.");
      }
    }
  };

  // --- Rich Text Editor Functions ---

  const insertList = (type) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);

    const list = document.createElement(type === "ol" ? "ol" : "ul");
    const item = document.createElement("li");
    item.textContent = "List item";
    list.appendChild(item);

    range.deleteContents();
    range.insertNode(list);

    const newRange = document.createRange();
    newRange.setStart(item, 0);
    newRange.collapse(true);

    selection.removeAllRanges();
    selection.addRange(newRange);

    editorRef.current.focus();
  };


  const execCommand = (command, value = null) => {
    if (!editorRef.current) return;
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  const handleLink = () => {
    const url = prompt("Enter URL:");
    if (url) execCommand("createLink", url);
  };

  const handleImageEmbed = () => {
    const url = prompt("Enter Image URL:");
    if (url) execCommand("insertImage", url);
  };

  const ToolbarBtn = ({ onClick, icon, title }) => {
    const IconComponent = icon;
    return (
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
        title={title}
      >
        {IconComponent && <IconComponent size={18} strokeWidth={2} />}
      </button>
    );
  };

  const Divider = () => (
    <div className="w-px h-6 bg-slate-300 mx-1 self-center opacity-50" />
  );

  return (
    <div className="flex font-sans bg-[#FDFBF7] min-h-screen">
      <AdminSidebar setIsAdminLoggedIn={setIsAdminLoggedIn} />

      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-900">
                Blogs
              </h1>
              <p className="text-slate-500 mt-2">Manage your latest Blogs</p>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }}
              className="bg-[#3fa3ce] hover:bg-[#1f6a81] cursor-pointer text-white font-medium py-2.5 px-6 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20"
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? "Cancel" : "Add New Blog"}
            </button>
          </div>

          {errorMessage && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Add/Edit Form (Styled to be light and clean) */}
          {showForm && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
              <h2 className="text-2xl cursor-pointer font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                {editId ? (
                  <Edit2 size={24} className="text-orange-500" />
                ) : (
                  <Plus size={24} className="text-orange-500" />
                )}
                {editId ? "Edit Blog" : "Create Blog"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-slate-700 font-semibold text-sm mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-slate-400"
                        placeholder="Blog Title"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-semibold text-sm mb-2">
                          Author
                        </label>
                        <input
                          type="text"
                          value={formData.author}
                          onChange={(e) =>
                            setFormData({ ...formData, author: e.target.value })
                          }
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500 placeholder-slate-400"
                          placeholder="Author Name"
                        />
                      </div>
                      <div></div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold text-sm mb-2">
                        Publish Date string
                      </label>
                      <input
                        type="text"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500 placeholder-slate-400"
                        placeholder="e.g. October 24, 2024"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-slate-700 font-semibold text-sm mb-2">
                        Cover Image
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1 cursor-pointer bg-slate-50 border border-dashed border-slate-300 hover:border-orange-500 rounded-lg p-3 flex items-center justify-center gap-2 transition-colors group">
                          <Upload
                            size={20}
                            className="text-slate-400 group-hover:text-orange-500"
                          />
                          <span className="text-slate-500 group-hover:text-orange-500 font-medium">
                            Upload Image
                          </span>

                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                        {imagePreview && (
                          <div className="w-20 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-200">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      <small>Recommended size: 400×300 </small>
                    </div>

                    {/* Rich Text Editor Area */}
                    <div>
                      <label className="block text-slate-700 font-semibold text-sm mb-2">
                        Content
                      </label>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-orange-500 focus-within:border-orange-500">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center p-2 gap-1 border-b border-slate-200 bg-white">
                          <ToolbarBtn
                            onClick={() => execCommand("bold")}
                            icon={Bold}
                            title="Bold"
                          />
                          <ToolbarBtn
                            onClick={() => execCommand("italic")}
                            icon={Italic}
                            title="Italic"
                          />
                          <ToolbarBtn
                            onClick={() => execCommand("underline")}
                            icon={Underline}
                            title="Underline"
                          />
                          <Divider />
                          <ToolbarBtn
                            onClick={() => insertList("ul")}
                            icon={List}
                            title="Bullet List"
                          />
                          <ToolbarBtn
                            onClick={() => insertList("ol")}
                            icon={ListOrdered}
                            title="Numbered List"
                          />

                          <Divider />
                          <ToolbarBtn
                            onClick={handleImageEmbed}
                            icon={ImageIcon}
                            title="Insert Image"
                          />
                          <ToolbarBtn
                            onClick={handleLink}
                            icon={LinkIcon}
                            title="Insert Link"
                          />
                          <Divider />
                          <ToolbarBtn
                            onClick={() => execCommand("justifyLeft")}
                            icon={AlignLeft}
                            title="Align Left"
                          />
                          <ToolbarBtn
                            onClick={() => execCommand("justifyCenter")}
                            icon={AlignCenter}
                            title="Align Center"
                          />
                          <ToolbarBtn
                            onClick={() => execCommand("justifyRight")}
                            icon={AlignRight}
                            title="Align Right"
                          />
                        </div>

                        {/* Editor */}
                        <div
                          ref={editorRef}
                          contentEditable
                          suppressContentEditableWarning
                          dir="ltr"
                          style={{
                            direction: "ltr",
                            textAlign: "left",
                            // unicodeBidi: "plaintext",
                          }}
                          onBlur={() => {
                            if (editorRef.current) {
                              setFormData({
                                ...formData,
                                content: editorRef.current.innerHTML,
                              });
                            }
                          }}
                          className="w-full min-h-[200px] px-4 py-3 bg-white text-slate-800 font-sans text-sm leading-relaxed overflow-y-auto  max-w-none focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className={`bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-orange-600/20 ${
                      isSaving
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-orange-700 cursor-pointer"
                    }`}
                  >
                    {isSaving
                      ? "Saving..."
                      : editId
                      ? "Update Blog"
                      : "Publish Blog"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Blog List - DESIGN MATCHING THE IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading && (
              <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500">Loading Blogs...</p>
              </div>
            )}

            {!isLoading && blogs.length === 0 && (
              <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500">No blog posts added yet.</p>
              </div>
            )}

            {!isLoading &&
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-slate-100"
                >
                  {/* Admin Controls (Hidden until hover) */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-white text-slate-700 cursor-pointer hover:text-orange-600 p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-white text-slate-700 cursor-pointer hover:text-red-600 p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="h-60 overflow-hidden relative">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                        <ImageIcon size={40} />
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-1" dir="ltr">
                    {/* Date - Orange style */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-orange-600" />
                      <span className="text-orange-600 text-xs font-semibold tracking-wide uppercase">
                        {blog.date}
                      </span>
                    </div>

                    {/* Title - Serif and Bold */}
                    <h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight mb-3 group-hover:text-orange-700 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <div
                      className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1"
                      style={{ unicodeBidi: "plaintext" }}
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;