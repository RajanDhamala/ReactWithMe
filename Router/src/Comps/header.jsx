import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <h1 className="text-4xl text-center font-extrabold text-white mb-4">
                My Website
            </h1>
            <nav>
                <ul className="flex flex-row justify-center gap-8">
                    <li>
                        <Link
                            to="/"
                            className="text-lg text-white font-semibold hover:text-yellow-300 transition-transform transform hover:scale-110"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-lg text-white font-semibold hover:text-yellow-300 transition-transform transform hover:scale-110"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-lg text-white font-semibold hover:text-yellow-300 transition-transform transform hover:scale-110"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/random"
                            className="text-lg text-white font-semibold hover:text-yellow-300 transition-transform transform hover:scale-110"
                        >
                            Random
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
