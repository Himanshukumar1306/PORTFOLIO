import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo-hk-ver-final.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Certificates', to: 'certificates' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-lg bg-white/70 dark:bg-[#05010D]/70 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
                {/* Logo */}
                <div className="cursor-pointer">
                    <Link to="hero" smooth={true} duration={500}>
                        <div className="h-16 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="font-medium text-gray-700 dark:text-gray-300 hover:text-neon-violet dark:hover:text-neon-violet transition-colors cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-4" />

                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/Himanshukumar1306" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-neon-violet transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/himanshu-kumar-65b388313" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-cosmic-indigo transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
                        >
                            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 dark:text-white hover:text-neon-violet transition-colors"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-white dark:bg-[#05010D] border-b border-gray-200 dark:border-white/10 animate-fade-in-down">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-medium text-gray-700 dark:text-gray-300 hover:text-neon-violet transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-white/10">
                            <a href="https://github.com/Himanshukumar1306" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-neon-violet transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/himanshu-kumar-65b388313" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-cosmic-indigo transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
