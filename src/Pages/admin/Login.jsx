import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Loader } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const AdminLogin = ({ setIsAdminLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If token exists, mark as logged in and redirect to admin dashboard
    try {
      const token = localStorage.getItem('adminToken');
      if (token) {
        if (setIsAdminLoggedIn) setIsAdminLoggedIn(true);
        navigate('/admin/blog');
      }
    } catch (err) {
      // ignore localStorage errors
    }
  }, []);


  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      // Persist a simple token so session survives refresh or navigation
      try {
        localStorage.setItem('adminToken', userCred.user.uid);
      } catch (err) {
        console.warn('Unable to store admin token locally', err);
      }
      if (setIsAdminLoggedIn) setIsAdminLoggedIn(true);
      setLoading(false);
      navigate('/admin/blog');
    } catch (error) {
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        setError('Invalid email or password');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Firebase login error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a5f4ea] via-[#61d7d9] to-[#239ea2]">
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-[#95e2eb] via-[#56b9cb] to-[#147885] p-3 rounded-lg mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h1>
         
        </div>

        <form onSubmit={handleLogin} className="mb-6">
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-semibold text-sm mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold text-sm mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-600 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#068ecd] text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
        

        
      </div>
    </div>
  );
};

export default AdminLogin;