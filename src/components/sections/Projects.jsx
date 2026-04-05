import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';

// Icons
const GithubIcon = () => <span>🐙</span>;
const EyeIcon = () => <span>👁</span>;
const FolderIcon = () => <span>📁</span>;

const ProjectCard = ({ project, index }) => {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={project.image}
                    className="w-full h-full object-cover"
                    animate={{ scale: hover ? 1.1 : 1 }}
                />

                <AnimatePresence>
                    {hover && (
                        <motion.div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50">
                            <a href={project.github} target="_blank">🐙</a>
                            <a href={project.liveDemo} target="_blank">👁</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <a href={project.github} className="flex-1 bg-slate-800 p-2 rounded text-center">
                        Code
                    </a>
                    <a href={project.liveDemo} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded text-white text-center">
                        Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container-custom">
                <SectionTitle title="Projects" subtitle="My Work" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://github.com/ansh2125"
                        className="px-6 py-3 border border-slate-700 rounded text-white"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;