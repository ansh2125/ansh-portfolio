import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
    const words = title.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');

    return (
        <div className={`mb-14 md:mb-20 ${centered ? 'text-center' : ''}`}>


            <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {firstPart}{' '}


                <motion.span
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {lastWord}


                    <span className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-blue-400 to-purple-500 -z-10"></span>
                </motion.span>
            </motion.h2>


            {subtitle && (
                <motion.p
                    className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {subtitle}
                </motion.p>
            )}


            <motion.div
                className={`mt-6 flex ${centered ? 'justify-center' : ''} items-center gap-2`}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="w-3 h-[2px] bg-blue-400 rounded-full"></div>
                <div className="w-1 h-[2px] bg-purple-400 rounded-full"></div>
            </motion.div>

        </div>
    );
};

export default SectionTitle;