import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Skill Test Website</h1>
                <nav className="flex space-x-4">
                    <a href="/" className="text-white hover:text-gray-200">Home</a>
                    <a href="/test" className="text-white hover:text-gray-200">Take Test</a>
                    <a href="/about" className="text-white hover:text-gray-200">About</a>
                </nav>
                <div className="flex space-x-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
