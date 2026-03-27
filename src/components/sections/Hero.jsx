import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import Button from '../common/Button';
import MagneticButton from '../common/MagneticButton';
import { AnimatedLetters, TypewriterText } from '../common/AnimatedText';

// ICONS
const GithubIcon = () => <span>🐙</span>;
const LinkedInIcon = () => <span>💼</span>;
const MailIcon = () => <span>✉️</span>;
const ChevronDownIcon = () => <span className="text-xl">⬇️</span>;
const SparklesIcon = () => <span>✨</span>;

const Hero = () => {

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumeUrl;
        link.download = 'Ansh_Shukla_Resume.pdf';
        link.click();
    };

    const socialLinks = [
        { icon: GithubIcon, href: personalInfo.github },
        { icon: LinkedInIcon, href: personalInfo.linkedin },
        { icon: MailIcon, href: `mailto:${personalInfo.email}` },
    ];

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center bg-slate-950 relative overflow-hidden overflow-x-hidden pt-20"
        >

            {/* 🔥 Background Glow FIXED */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl w-full mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div className="text-center lg:text-left">

                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-blue-400 text-sm mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        👋 Welcome <SparklesIcon />
                    </motion.span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            <AnimatedLetters text={personalInfo.name} />
                        </span>
                    </h1>

                    {/* Role */}
                    <p className="text-xl text-slate-300 mb-6">
                        <TypewriterText text={personalInfo.role} />
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                        I build scalable, high-performance web applications using MERN stack with modern UI & best practices.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                        <Button>View Projects</Button>

                        <Button variant="outline">
                            Contact Me
                        </Button>

                        <Button variant="secondary" onClick={handleDownloadResume}>
                            Resume
                        </Button>
                    </div>

                    {/* Social */}
                    <div className="flex gap-3 justify-center lg:justify-start">
                        {socialLinks.map((social, i) => (
                            <MagneticButton key={i}>
                                <motion.a
                                    href={social.href}
                                    target="_blank"
                                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
                                    whileHover={{ y: -4 }}
                                >
                                    <social.icon />
                                </motion.a>
                            </MagneticButton>
                        ))}
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center relative overflow-hidden">

                    {/* Glow FIXED */}
                    <div className="absolute w-60 md:w-80 h-60 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30 rounded-full"></div>

                    <motion.img
                        src={personalInfo.profileImage}
                        alt="profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800 shadow-xl relative z-10"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        whileHover={{ scale: 1.05 }}
                    />
                </div>

            </div>

            {/* Scroll */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-slate-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <p className="text-sm">Scroll</p>
                <ChevronDownIcon />
            </motion.div>

        </section>
    );
};

export default Hero;