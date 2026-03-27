import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../../data/portfolioData';
import MagneticButton from '../common/MagneticButton';


const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 
        0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5z"/>
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
    </svg>
);

const ArrowUpIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M5 15l7-7 7 7" />
    </svg>
);

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
);


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: LinkedInIcon, href: personalInfo.linkedin },
        { icon: MailIcon, href: `mailto:${personalInfo.email}` },
    ];

    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden">


            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>


            <MagneticButton className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <motion.button
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUpIcon />
                </motion.button>
            </MagneticButton>

            <div className="container-custom pt-20 pb-10 relative z-10">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">


                    <div className="lg:col-span-2">
                        <motion.a
                            href="#home"
                            className="flex items-center gap-2 text-xl font-bold mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <CodeIcon />
                            </div>
                            Ansh<span className="text-blue-400">.</span>
                        </motion.a>

                        <p className="text-slate-400 mb-6 max-w-md">
                            MERN Stack Developer building scalable, modern and high-performance web applications.
                        </p>


                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <MagneticButton key={i}>
                                    <motion.a
                                        href={social.href}
                                        target="_blank"
                                        className="w-11 h-11 rounded-xl bg-slate-800/60 backdrop-blur flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
                                        whileHover={{ y: -4 }}
                                    >
                                        <social.icon />
                                    </motion.a>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
                        {navLinks.map(link => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="block text-slate-400 hover:text-blue-400 transition mb-2"
                                whileHover={{ x: 5 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-white">Contact</h3>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400"
                        >
                            <MailIcon />
                            {personalInfo.email}
                        </a>
                        <p className="text-slate-500 mt-2">📍 {personalInfo.location}</p>
                    </div>

                </div>


                <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Ansh Shukla ❤️
                    </p>
                    <p className="text-sm text-slate-600">
                        Built with React & Tailwind
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;