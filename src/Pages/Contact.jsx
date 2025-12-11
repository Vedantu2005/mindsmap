import React, { useState, useRef, useCallback, useEffect } from 'react';
import { User, Building, Mail, Phone, Pencil, MapPin, Globe } from 'lucide-react';

// Reusable component for form input fields
const FormInput = ({ icon, type, placeholder, name, value, onChange }) => (
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            {icon}
        </div>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
        />
    </div>
);

// Component for location cards
const LocationCard = ({ country, address, phone }) => (
    <div>
        <h3 className="text-2xl font-bold text-white mb-2">{country}</h3>
        <p className="text-slate-300 leading-relaxed">{address}</p>
        {phone && <p className="text-slate-300 mt-2">{phone}</p>}
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });

    // We'll treat budget values as percentages (0-100) for easier calculation
    const [budget, setBudget] = useState({ min: 10, max: 50 });

    // State to track which handle is being dragged
    const [dragging, setDragging] = useState(null); // 'min', 'max', or null

    // Ref for the slider bar element
    const sliderRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Handles manual input into the budget text fields
    const handleBudgetInputChange = (type, value) => {
        const val = parseInt(value.replace(/\D/g, '')) || 0;
        if (type === 'min') {
            setBudget(prev => ({ ...prev, min: Math.min(val, prev.max - 1) }));
        } else {
            setBudget(prev => ({ ...prev, max: Math.max(val, prev.min + 1) }));
        }
    };

    // This is the main logic for handling the drag movement
    const handleMouseMove = useCallback((e) => {
        if (!dragging || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        // Use clientX for mouse events, and the first touch's clientX for touch events
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;

        // Clamp the percentage between 0 and 100
        percentage = Math.max(0, Math.min(100, percentage));

        const newValue = Math.round(percentage);

        if (dragging === 'min') {
            // Ensure min handle doesn't go past max handle (with a gap of 1)
            setBudget(prev => ({ ...prev, min: Math.min(newValue, prev.max - 1) }));
        } else { // dragging === 'max'
            // Ensure max handle doesn't go below min handle (with a gap of 1)
            setBudget(prev => ({ ...prev, max: Math.max(newValue, prev.min + 1) }));
        }
    }, [dragging]);

    // Sets the active handle when dragging starts
    const handleMouseDown = (type) => {
        setDragging(type);
    };

    // Clears the active handle when dragging stops
    const handleMouseUp = useCallback(() => {
        setDragging(null);
    }, []);

    // Effect to add and remove global event listeners
    useEffect(() => {
        if (dragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleMouseMove);
            document.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [dragging, handleMouseMove, handleMouseUp]);


    const iconClass = "h-5 w-5 text-gray-400";

    return (
        <div className="bg-white font-sans">
            <div className="grid lg:grid-cols-2">
                {/* Left Side: Map and Addresses */}
                <div className="bg-[#0f172a] text-white p-8 md:p-12 lg:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-10">Our Locations</h2>
                        <div className="relative mb-12">
                            <img src="/map.webp" alt="World Map" className="w-full h-auto rounded-lg opacity-30" />
                            {/* Pins - for visual representation */}
                            <div className="absolute top-[45%] left-[12%] flex items-center">
                                <MapPin className="h-6 w-6 text-white animate-pulse" />
                                <span className="ml-2 bg-white/80 text-black text-xs font-bold px-2 py-1 rounded-md">
                                    USA
                                </span>
                            </div>
                            <div className="absolute top-[43%] left-[36.5%] flex items-center">
                                <MapPin className="h-6 w-6 text-white animate-pulse" />
                                <span className="ml-2 bg-white/80 text-black text-xs font-bold px-2 py-1 rounded-md">
                                    UK
                                </span>
                            </div>
                            <div className="absolute top-[45%] left-[63%] flex items-center">
                                <MapPin className="h-6 w-6 text-white animate-pulse" />
                                <span className="ml-2 bg-white/80 text-black text-xs font-bold px-2 py-1 rounded-md">
                                    India
                                </span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                            <LocationCard
                                country="USA"
                                address="99 Hudson St 5th floor, Manhattan, NY 10013, United States"
                            />
                            <LocationCard
                                country="UK"
                                address="25 Old Broad street, London E2N 1HQ,"
                            />
                            <LocationCard
                                country="India"
                                address="418, MRG, Mahalaxmi Nagar, Indore, Madhya Pradesh, India"
                                
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="p-8 md:p-8 lg:p-8 bg-white">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-8">
                            Drop us a line about your project or describe a challenge your company needs help solving. We'd love to discuss how Mindsmap AI can work with you. Please get in touch via email at <a href="businessdevelopment@mindsmapai.com" className="text-[#77bce8] font-medium hover:underline">businessdevelopment@mindsmapai.com</a> or using the form below.
                        </p>

                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <FormInput icon={<User className={iconClass} />} type="text" placeholder="Name*" name="name" value={formData.name} onChange={handleInputChange} />
                                <FormInput icon={<Building className={iconClass} />} type="text" placeholder="Company Name*" name="company" value={formData.company} onChange={handleInputChange} />
                                <FormInput icon={<Mail className={iconClass} />} type="email" placeholder="Business email*" name="email" value={formData.email} onChange={handleInputChange} />
                                <FormInput icon={<Phone className={iconClass} />} type="tel" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>
                            <div className="relative">
                                <div className="absolute top-3 left-0 flex items-center pl-4 pointer-events-none"><Pencil className={iconClass} /></div>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="How can we help you?" rows="4" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                            </div>

                            {/* ---- MODIFIED BUDGET SLIDER ---- */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-3">Please define your budget range for your project:</label>
                                <div className="flex items-center space-x-4">
                                    <input type="text" value={`$${budget.min}k`} onChange={(e) => handleBudgetInputChange('min', e.target.value)} className="w-24 text-center py-2 border border-gray-300 rounded-lg" />

                                    <div ref={sliderRef} className="relative flex-grow h-2 bg-gray-200 rounded-full">
                                        <div className="absolute h-2 bg-[#77bce8] rounded-full" style={{ left: `${budget.min}%`, right: `${100 - budget.max}%` }}></div>

                                        {/* Min Handle */}
                                        <div
                                            className="absolute -top-2 w-6 h-6 bg-white border-2 border-[#77bce8] rounded-full cursor-pointer"
                                            style={{ left: `calc(${budget.min}% - 12px)` }}
                                            onMouseDown={() => handleMouseDown('min')}
                                            onTouchStart={() => handleMouseDown('min')}
                                        ></div>

                                        {/* Max Handle */}
                                        <div
                                            className="absolute -top-2 w-6 h-6 bg-white border-2 border-[#77bce8] rounded-full cursor-pointer"
                                            style={{ left: `calc(${budget.max}% - 12px)` }}
                                            onMouseDown={() => handleMouseDown('max')}
                                            onTouchStart={() => handleMouseDown('max')}
                                        ></div>
                                    </div>

                                    <input type="text" value={`$${budget.max}k`} onChange={(e) => handleBudgetInputChange('max', e.target.value)} className="w-24 text-center py-2 border border-gray-300 rounded-lg" />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#77bce8] text-white font-bold cursor-pointer py-4 px-6 rounded-lg hover:bg-[#77bce8] transition-colors duration-300 shadow-lg">Send Message</button>
                            <p className="text-xs text-gray-500 text-center">By clicking Send Message, you agree to our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;