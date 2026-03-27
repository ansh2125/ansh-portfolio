import React from 'react';
import { motion } from 'framer-motion';
import { volunteerExperience } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

// Icons
const CalendarIcon = () => <span>📅</span>;
const CheckIcon = () => <span className="text-blue-400">✔</span>;

const VolunteerCard = ({ experience, index }) => {
    return (
        <motion.div
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
        >
            {/* Header */}
            <div className={`bg-gradient-to-r ${experience.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <experience.icon className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{experience.role}</h3>
                        <p className="text-white/80">{experience.organization}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="text-slate-400 flex items-center gap-2 mb-4">
                    <CalendarIcon /> {experience.duration}
                </div>

                <ul className="space-y-2">
                    {experience.activities.map((act, i) => (
                        <motion.li
                            key={i}
                            className="flex gap-2 text-slate-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <CheckIcon />
                            {act}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Volunteer = () => {
    return (
        <section className="section-padding bg-slate-950">
            <div className="container-custom">
                <SectionTitle title="Volunteer Experience" subtitle="Community work" />

                <div className="grid md:grid-cols-2 gap-8">
                    {volunteerExperience.map((exp, i) => (
                        <VolunteerCard key={exp.id} experience={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;