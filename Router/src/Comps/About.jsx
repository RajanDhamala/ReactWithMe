import React from 'react';

function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
                Welcome to our website! We are a passionate team dedicated to providing
                exceptional service and creating meaningful experiences for our users.
                Our mission is to deliver high-quality products and ensure customer satisfaction.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                <p className="text-lg text-gray-600">
                    Our journey began with a simple idea: to make a difference in the world
                    through innovation and creativity. Over the years, we have grown and evolved,
                    but our commitment to excellence remains unwavering. We value transparency,
                    collaboration, and integrity in all that we do.
                </p>
            </div>
        </div>
    );
}

export default About;
