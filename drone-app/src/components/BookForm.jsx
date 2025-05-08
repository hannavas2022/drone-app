import { useState } from 'react';

const BookForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
                setFormData({ name: '', email: '', date: '', message: '' });
                setErrors({});
            }
        } catch (err) {
            console.error('Form submit error:', err);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-6 text-center text-2xl font-bold text-[#005BBB]">
                    Book your drone shooting today
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-700">
                        Select a date *
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#005BBB] focus:outline-none focus:ring-1 focus:ring-[#005BBB]"
                    />
                    {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Details (optional)</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-[#005BBB] px-4 py-2 text-white transition-colors hover:bg-[#004899]"
                >
                    Send Message
                </button>
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
