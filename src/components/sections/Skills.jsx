import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.03 }}
        >
            <div className="flex items-center gap-4 mb-4">
                <motion.div
                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    <skill.icon className="w-6 h-6 text-blue-400" />
                </motion.div>

                <div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                    <p className="text-slate-400 text-sm">{skill.level}%</p>
                </div>
            </div>

            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-slate-950">
            <div className="container-custom">
                <SectionTitle title="My Skills" subtitle="Tech stack I use" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;