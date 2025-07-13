import React from "react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-blue-100 p-6 flex items-center justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
                <p className="text-gray-600 mb-8 text-center">
                    We'd love to hear from you! Whether you have a question about a destination,
                    need assistance, or just want to share feedback—feel free to reach out.
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="md:col-span-2 flex flex-col">
                        <label className="text-sm text-gray-700 mb-1">Message</label>
                        <textarea
                            placeholder="Write your message here..."
                            rows="5"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
