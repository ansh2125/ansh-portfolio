import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/portfolioData.js';

// ICONS
const MenuIcon = () => (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-6 h-6">
        <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${scrolled
                ? 'bg-slate-900/70 backdrop-blur-xl border-b border-slate-800'
                : 'bg-transparent'
                }`}
        >
            {/* NAVBAR CONTENT */}
            <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* LEFT (LOGO + HAMBURGER) */}
                <div className="flex items-center gap-2">
                    {/* LOGO */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className="text-white font-bold text-lg"
                    >
                        Ansh<span className="text-blue-400">.</span>
                    </a>

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-white ml-1"
                    >
                        <MenuIcon />
                    </button>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.href);
                            }}
                            className="text-slate-400 hover:text-white transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contact');
                        }}
                        className="px-4 py-2 bg-blue-500 rounded-lg text-white"
                    >
                        Hire Me
                    </a>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[999] bg-slate-900 flex flex-col items-center justify-center space-y-6"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white z-[1000]"
                        >
                            <CloseIcon />
                        </button>

                        {/* NAV LINKS */}
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="text-white text-xl"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* CTA */}
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;