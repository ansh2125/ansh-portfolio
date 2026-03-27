import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

// Icons
const CalendarIcon = () => <span>📅</span>;
const LocationIcon = () => <span>📍</span>;
const CheckIcon = () => <span className="text-blue-400">✔</span>;

const ExperienceCard = ({ experience, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative">

            {/* Timeline dot */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10 shadow-lg shadow-blue-500/30" />

            <motion.div
                className={`w-full md:w-[48%] ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                    }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-lg">

                    {/* Header */}
                    <div className={`flex ${isLeft ? 'justify-end' : 'justify-between'} items-start mb-4 gap-3`}>

                        <div className={isLeft ? 'text-right' : ''}>
                            <h3 className="text-lg font-semibold text-white">
                                {experience.role}
                            </h3>
                            <p className="text-blue-400 text-sm">
                                {experience.company}
                            </p>
                        </div>

                        {/* Badge */}
                        <span
                            className={`
                                inline-flex items-center gap-1
                                px-3 py-[6px] rounded-full text-xs font-medium whitespace-nowrap
                                ${experience.status === 'Currently Working'
                                    ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                                }
                            `}
                        >
                            {experience.status === 'Currently Working' && (
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            )}
                            {experience.status}
                        </span>

                    </div>

                    {/* Info */}
                    <div className={`text-sm text-slate-400 mb-4 space-y-1 ${isLeft ? 'text-right' : ''}`}>
                        <div className={`flex gap-2 ${isLeft ? 'justify-end' : ''}`}>
                            <CalendarIcon /> {experience.duration}
                        </div>
                        <div className={`flex gap-2 ${isLeft ? 'justify-end' : ''}`}>
                            <LocationIcon /> {experience.location}
                        </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                            <li
                                key={i}
                                className={`flex gap-2 text-slate-400 text-sm ${isLeft ? 'justify-end' : ''}`}
                            >
                                <CheckIcon />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Tech */}
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : ''}`}>
                        {experience.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-slate-950 relative">

            <div className="container-custom">
                <SectionTitle
                    title="Work Experience"
                    subtitle="My professional journey"
                />

                <div className="relative max-w-5xl mx-auto">

                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <ExperienceCard key={exp.id} experience={exp} index={i} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;