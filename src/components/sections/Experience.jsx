import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

// Icons with better styling
const CalendarIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
    </svg>
);

const LocationIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
);

// Status Badge Component
const StatusBadge = ({ status }) => {
    const isActive = status === 'Currently Working';

    return (
        <span
            className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5 rounded-full text-xs font-medium
        transition-all duration-300
        ${isActive
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20 shadow-lg shadow-green-500/5'
                    : 'bg-slate-800/80 text-slate-400 border border-slate-700/50'
                }
      `}
        >
            {isActive && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
            )}
            {status}
        </span>
    );
};

// Timeline Dot Component
const TimelineDot = ({ isActive }) => (
    <div className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 z-10">
        {/* Outer glow */}
        <div className={`
      absolute inset-0 w-5 h-5 rounded-full blur-md
      ${isActive ? 'bg-green-500/50' : 'bg-blue-500/50'}
    `} />

        {/* Main dot */}
        <div className={`
      relative w-5 h-5 rounded-full border-4 border-slate-950
      ${isActive
                ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }
    `}>
            {/* Inner dot */}
            <div className="absolute inset-1 bg-slate-950 rounded-full" />
            <div className={`
        absolute inset-1.5 rounded-full
        ${isActive
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }
      `} />
        </div>
    </div>
);

// Experience Card Component
const ExperienceCard = ({ experience, index, total }) => {
    const isLeft = index % 2 === 0;
    const isActive = experience.status === 'Currently Working';

    return (
        <div className="relative pl-8 md:pl-0">

            {/* Timeline Dot */}
            <TimelineDot isActive={isActive} />

            {/* Card Container */}
            <motion.div
                className={`
          w-full md:w-[calc(50%-2rem)]
          ${isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}
        `}
                initial={{ opacity: 0, y: 30, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                }}
            >
                {/* Connector Line (Desktop) */}
                <div className={`
          hidden md:block absolute top-10 w-8 h-[2px]
          ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}
          bg-gradient-to-r ${isLeft ? 'from-slate-700 to-slate-800' : 'from-slate-800 to-slate-700'}
        `} />

                {/* Card */}
                <motion.div
                    className={`
            relative overflow-hidden
            bg-slate-900/60 backdrop-blur-xl 
            border border-slate-800/50 rounded-2xl 
            p-5 sm:p-6 
            shadow-xl shadow-slate-950/50
            transition-all duration-500
            hover:border-slate-700/50 hover:shadow-2xl hover:shadow-blue-500/5
            group
          `}
                    whileHover={{ y: -2 }}
                >
                    {/* Gradient Border Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1px] rounded-2xl bg-slate-900/90" />
                        <div className={`
              absolute inset-0 rounded-2xl
              bg-gradient-to-r ${isActive ? 'from-green-500/20 via-transparent to-emerald-500/20' : 'from-blue-500/20 via-transparent to-purple-500/20'}
            `} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">

                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                                    {experience.role}
                                </h3>
                                <p className="text-blue-400 font-medium flex items-center gap-2">
                                    <BriefcaseIcon />
                                    <span className="truncate">{experience.company}</span>
                                </p>
                            </div>
                            <StatusBadge status={experience.status} />
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 mb-5">
                            <div className="flex items-center gap-2">
                                <CalendarIcon />
                                <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LocationIcon />
                                <span>{experience.location}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-3 mb-5">
                            {experience.description.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                >
                                    <CheckIcon />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    className="
                    px-3 py-1.5 
                    bg-slate-800/80 hover:bg-slate-700/80
                    text-slate-300 hover:text-white
                    border border-slate-700/50 hover:border-slate-600/50
                    rounded-lg text-xs font-medium
                    transition-all duration-300
                    cursor-default
                  "
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * i + 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Main Experience Component
const Experience = () => {
    return (
        <section
            id="experience"
            className="relative py-20 sm:py-24 lg:py-32 bg-slate-950 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        Career Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Work{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        My professional journey building impactful digital solutions
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Timeline Line */}
                    <div className="
            absolute left-[9px] md:left-1/2 
            top-0 bottom-0 
            w-[2px] md:-translate-x-1/2
            bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-slate-800/50
          " />

                    {/* Experience Cards */}
                    <div className="space-y-12 sm:space-y-16">
                        {experiences.map((exp, i) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                index={i}
                                total={experiences.length}
                            />
                        ))}
                    </div>

                    {/* Timeline End Dot */}
                    <motion.div
                        className="absolute left-0 md:left-1/2 -bottom-4 md:-translate-x-1/2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;