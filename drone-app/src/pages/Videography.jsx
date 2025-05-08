const BookForm = () => {
    return (
        <div id="book-form" className="flex min-h-screen items-center justify-center px-4 py-12">
            <form
                action="https://formsubmit.co/koomadrone@gmail.com"
                method="POST"
                className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md"
            >
                <h2 className="mb-6 text-center text-2xl font-bold text-[#005BBB]">Book your drone shooting today</h2>

                {/* Name (required) */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    />
                </div>

                {/* Email (required) */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    />
                </div>

                {/* Phone Number (optional) */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number (optional)</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 234 567 8901"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    />
                </div>

                {/* Date (required) */}
                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-700">
                        Select a date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#005BBB] focus:outline-none focus:ring-1 focus:ring-[#005BBB]"
                    />
                </div>

                {/* Message (required) */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Details</label>
                    <textarea
                        name="message"
                        rows="3"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-[#005BBB] focus:outline-none"
                    ></textarea>
                </div>

                {/* Hidden fields for formsubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_autoresponse" value="Thank you for your message!" />

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full rounded-md bg-[#005BBB] px-4 py-2 text-white transition-colors hover:bg-[#004899]"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default BookForm;
