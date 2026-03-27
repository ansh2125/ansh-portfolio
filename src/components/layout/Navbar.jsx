import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '../common/MagneticButton';
import { navLinks } from '../../data/portfolioData.js';

// ================= ICONS =================
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

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="2" />
    </svg>
);

// ================= COMPONENT =================
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.substring(1));
            const current = sections.find((sec) => {
                const el = document.getElementById(sec);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 120 && rect.bottom >= 120;
            });
            if (current) setActiveSection(current);
        };

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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-slate-900/70 backdrop-blur-xl border-b border-slate-800 shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="container-custom py-3 flex justify-between items-center">

                {/* Logo */}
                <MagneticButton>
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className="flex items-center gap-2 text-white font-bold text-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <CodeIcon />
                        </div>
                        Ansh<span className="text-blue-400">.</span>
                    </motion.a>
                </MagneticButton>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-2">
                    {navLinks.map((link) => (
                        <MagneticButton key={link.name}>
                            <motion.a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`px-4 py-2 rounded-lg text-sm transition ${activeSection === link.href.substring(1)
                                        ? 'text-blue-400'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {activeSection === link.href.substring(1) && (
                                    <motion.span
                                        layoutId="navActive"
                                        className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10"
                                    />
                                )}
                                {link.name}
                            </motion.a>
                        </MagneticButton>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <MagneticButton>
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            Hire Me
                        </motion.a>
                    </MagneticButton>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-2"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="block text-slate-300 py-2 hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            className="block mt-3 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white"
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