import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

const CertificationCard = ({ certification, index }) => {
    return (
        <motion.div
            className="group relative rounded-2xl overflow-hidden 
                       bg-slate-900/70 backdrop-blur-xl 
                       border border-slate-800 
                       shadow-lg shadow-black/40"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow:
                    '0 20px 60px rgba(59,130,246,0.15), 0 10px 30px rgba(0,0,0,0.6)',
            }}
        >
            {/* 🔥 Glow Background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl"></div>
            </div>

            {/* Gradient Top Bar */}
            <motion.div
                className={`h-[3px] bg-gradient-to-r ${certification.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                style={{ transformOrigin: 'left' }}
            />

            <div className="p-6 relative z-10">

                {/* Icon + Issuer */}
                <div className="flex items-center justify-between mb-4">
                    <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${certification.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <certification.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs">
                        {certification.issuer}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                    {certification.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">
                    {certification.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill, i) => (
                        <motion.span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md 
                                       bg-slate-800 text-slate-300"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 + 0.5 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#1e293b',
                                color: '#60a5fa',
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <section className="section-padding bg-slate-950 relative">

            {/* 🔥 Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="container-custom">
                <SectionTitle
                    title="Certifications"
                    subtitle="Professional certifications and achievements"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((certification, index) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;