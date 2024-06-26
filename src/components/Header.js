import React from 'react';

const Header = () => {
    return (
        <header className="bg-purple-600 p-4 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">Skill Test Website</h1>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <a href="/" className="text-white hover:text-gray-200">Home</a>
                    <a href="/test" className="text-white hover:text-gray-200">Take Test</a>
                    <a href="/about" className="text-white hover:text-gray-200">About</a>
                </nav>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                </div>
            </div>
        </header>  
    );
};

export default Header;
