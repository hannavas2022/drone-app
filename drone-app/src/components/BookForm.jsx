import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.date.trim()) newErrors.date = 'Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const form = new FormData();
        Object.entries(formData).forEach(([key, val]) => form.append(key, val));
        form.append('_captcha', 'false');
        form.append('_template', 'box');
        form.append('_autoresponse', 'Thank you for your message!');

        try {
            const res = await fetch('https://formsubmit.co/koomadrone@gmail.com', {
                method: 'POST',
                body: form,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (res.ok) {
                setShowModal(true);
                setFormData({ name: '', email: '', phone: '', date: '', message: '' });
                setErrors({});
            }
        } catch (err) {
            console.error('Form submit error:', err);
        }
    };

    return (
        <div id="book-form" className="mb-8 flex items-center justify-center px-4 py-2">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl rounded-[32px] bg-[#002A5780] p-8 shadow-md"
            >

                <h2 className="mb-6 text-center text-2xl font-semibold text-white">
                    Book your drone shooting today
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="w-full rounded-md border-2 border-white bg-[#002A5720] p-3 text-white placeholder-white transition-all duration-200 hover:border-[#005BBB] focus:border-[#FFD500] focus:outline-none"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full rounded-md border-2 border-white bg-[#002A5720] p-3 text-white placeholder-white transition-all duration-200 hover:border-[#005BBB] focus:border-[#FFD500] focus:outline-none"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number (optional)"
                            className="w-full rounded-md border-2 border-white bg-[#002A5720] p-3 text-white placeholder-white transition-all duration-200 hover:border-[#005BBB] focus:border-[#FFD500] focus:outline-none"
                        />
                    </div>

                    {/* Date */}
                    <DatePicker
                        selected={formData.date ? new Date(formData.date) : null}
                        onChange={(date) => {
                            setFormData((prev) => ({
                                ...prev,
                                date: date ? date.toISOString().split('T')[0] : ''
                            }));
                        }}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="Date"
                        className="w-full rounded-md border-2 border-white bg-[#002A5720] p-3 text-white placeholder-white transition-all duration-200 hover:border-[#005BBB] focus:border-[#FFD500] focus:outline-none"
                    />
                    {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                 
                    {/* Message - full width on all screens */}
                    <div className="md:col-span-2">
                        <textarea
                            name="message"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Details (optional)"
                            className="w-full rounded-md border-2 border-white bg-[#002A5720] p-3 text-white placeholder-white transition-all duration-200 hover:border-[#005BBB] focus:border-[#FFD500] focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Submit Button - full width and centered */}
                    <div className="flex justify-center md:col-span-2">
                        <button
                            type="submit"
                            className="h-[56px] w-full max-w-[277px] rounded-[32px] bg-[#005BBB] px-6 py-3 font-semibold text-[20px] text-[#FFD500] transition-opacity duration-300 ease-out hover:opacity-70"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="rounded-lg bg-white p-6 text-center shadow-lg">
                        <h3 className="text-xl font-bold text-[#005BBB]">Message Sent!</h3>
                        <p className="mt-2 text-gray-700">
                            Thank you for booking with us. We’ll get back to you soon.
                        </p>
                        <button
                            className="mt-4 rounded bg-[#FFD500] px-4 py-2 text-[#005BBB]"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookForm;
