import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import MagneticButton from '../common/MagneticButton';

// ================= ICONS =================
const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M22 16.92V21a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.9.37 1.77.72 2.6a2 2 0 01-.45 2.11L10 11a16 16 0 006 6l1.57-1.57a2 2 0 012.11-.45c.83.35 1.7.6 2.6.72A2 2 0 0122 16.92z" />
    </svg>
);

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 
        12-12S18.63 0 12 0z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 
        2.8 2.2 5 5 5h14c2.8 0 5-2.2 
        5-5V5c0-2.8-2.2-5-5-5z"/>
    </svg>
);

const UserIcon = () => <span>👤</span>;
const MessageIcon = () => <span>💬</span>;

// ================= COMPONENT =================
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const msg = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        window.open(`https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(msg)}`);

        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: MailIcon, value: personalInfo.email },
        { icon: PhoneIcon, value: personalInfo.phone },
        { icon: LocationIcon, value: personalInfo.location },
    ];

    const socialLinks = [
        { icon: GithubIcon, href: personalInfo.github },
        { icon: LinkedInIcon, href: personalInfo.linkedin },
    ];

    return (
        <section id="contact" className="py-20 bg-slate-950 relative">

            {/* 🔥 Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container-custom">
                <SectionTitle title="Contact" subtitle="Let's connect" />

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">
                            Get in touch
                        </h3>

                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 mb-4 text-slate-400"
                                whileHover={{ x: 5 }}
                            >
                                <item.icon />
                                <span>{item.value}</span>
                            </motion.div>
                        ))}

                        {/* Social */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social, i) => (
                                <MagneticButton key={i}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
                                    >
                                        <social.icon />
                                    </a>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl focus-within:border-blue-500">
                            <UserIcon />
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full bg-transparent outline-none text-white"
                            />
                        </div>

                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl focus-within:border-blue-500">
                            <MailIcon />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full bg-transparent outline-none text-white"
                            />
                        </div>

                        <div className="flex items-start gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl focus-within:border-blue-500">
                            <MessageIcon />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows={4}
                                className="w-full bg-transparent outline-none text-white"
                            />
                        </div>

                        {/* Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl shadow-lg shadow-blue-500/20"
                        >
                            Send Message 🚀
                        </motion.button>

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;