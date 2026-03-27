import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, education } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

// ✅ Custom Icon
const GraduationIcon = () => (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5">
        <path d="M12 3L2 9l10 6 10-6-10-6z" strokeWidth="2" />
        <path d="M6 12v5a6 6 0 0012 0v-5" strokeWidth="2" />
    </svg>
);

const About = () => {

    return (
        <section id="about" className="section-padding bg-slate-950 relative overflow-hidden">

            {/* 🔥 Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container-custom">

                <SectionTitle
                    title="About Me"
                    subtitle="Get to know more about my journey and passion for development"
                />

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-2 space-y-6">

                        {aboutData.description.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="text-slate-400 leading-relaxed text-base md:text-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        {/* 🔥 Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                            {aboutData.highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 rounded-xl bg-slate-900/60 backdrop-blur border border-slate-800 text-center"
                                    whileHover={{ y: -8, scale: 1.03 }}
                                >
                                    <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                    <p className="text-xs text-slate-500">{item.label}</p>
                                    <p className="text-lg font-semibold text-white">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT CARD */}
                    <Card className="h-fit">

                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <GraduationIcon />
                            </motion.div>
                            Education
                        </h3>

                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-6 border-l border-slate-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="absolute left-[-6px] top-2 w-3 h-3 bg-blue-500 rounded-full"></span>

                                    <h4 className="text-white font-medium">{edu.degree}</h4>

                                    {edu.score && (
                                        <p className="text-blue-400 text-sm">{edu.score}</p>
                                    )}

                                    <p className="text-slate-500 text-sm">{edu.institution}</p>
                                </motion.div>
                            ))}
                        </div>

                    </Card>

                </div>
            </div>
        </section>
    );
};

export default About;