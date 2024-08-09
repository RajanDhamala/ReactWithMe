import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
