import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div>
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <ul>
                    <li className="mb-2">
                        <a href="/" className="text-lg hover:text-yellow-300 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-lg hover:text-yellow-300 transition-colors">
                            About
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <ul>
                    <li className="mb-2">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-lg hover:text-yellow-300 transition-colors">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="/discord" className="text-lg hover:text-yellow-300 transition-colors">
                            Discord
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Legal</h2>
                <ul>
                    <li className="mb-2">
                        <a href="/privacy" className="text-lg hover:text-yellow-300 transition-colors">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms" className="text-lg hover:text-yellow-300 transition-colors">
                            Terms & Conditions
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
