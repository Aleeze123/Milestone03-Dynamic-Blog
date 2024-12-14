'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 flex items-center justify-between px-4 py-4 sm:px-6 shadow-md border-b border-gray-300 fixed top-0 left-0 z-50">
            <div className="text-gray-900 text-3xl sm:text-4xl font-serif font-extrabold tracking-wide transform transition-all duration-300 hover:scale-110 hover:text-orange-500 cursor-pointer">
                BlogSphere
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-900 text-3xl">
                    {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-70 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}
            >
                <nav
                    className={`fixed inset-0 bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-200 p-6 space-y-6 flex flex-col justify-center items-center transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <button onClick={toggleMenu} className="absolute top-6 right-6 text-black text-3xl">
                        <AiOutlineClose />
                    </button>
                    <Link href="/" className="text-gray-900 text-2xl sm:text-3xl font-medium transition-all duration-300 hover:text-orange-500 transform hover:scale-105" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/About" className="text-gray-900 text-2xl sm:text-3xl font-medium transition-all duration-300 hover:text-orange-500 transform hover:scale-105" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/Blog" className="text-gray-900 text-2xl sm:text-3xl font-medium transition-all duration-300 hover:text-orange-500 transform hover:scale-105" onClick={toggleMenu}>
                        Posts
                    </Link>
                </nav>
            </div>

            <nav className="hidden md:flex space-x-6 lg:space-x-12 text-gray-900 text-lg lg:text-xl font-medium">
                <Link href="/" className="relative group">
                    <span className="relative group text-gray-900 hover:text-orange-500 transition-all duration-300">Home</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/About" className="relative group">
                    <span className="relative group text-gray-900 hover:text-orange-500 transition-all duration-300">About</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <Link href="/Blog" className="relative group">
                    <span className="relative group text-gray-900 hover:text-orange-500 transition-all duration-300">Posts</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
