import React from 'react';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 text-white">
            <h1 className="text-4xl font-extrabold text-center mb-6 animate-bounce">
                Welcome to the Home Page!
            </h1>
            <p className="text-2xl text-center font-light max-w-md mb-6">
                This is the content of the Home component. We are glad to have you here. Explore and enjoy the journey!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Get Started
            </button>
        </div>
    );
}

export default Home;
