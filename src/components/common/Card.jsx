import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0, hover = true }) => {
    return (
        <motion.div
            className={`
                relative rounded-2xl p-6 
                bg-slate-900/70 backdrop-blur-xl 
                border border-slate-800 
                shadow-lg shadow-black/40
                overflow-hidden
                ${className}
            `}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                delay: delay * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99],
            }}
            whileHover={
                hover
                    ? {
                        y: -10,
                        scale: 1.02,
                        boxShadow:
                            '0 20px 60px rgba(59, 130, 246, 0.15), 0 10px 30px rgba(0,0,0,0.6)',
                    }
                    : {}
            }
        >

            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background:
                        'linear-gradient(120deg, rgba(59,130,246,0.3), rgba(168,85,247,0.3))',
                    filter: 'blur(20px)',
                    zIndex: 0,
                }}
            />


            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                whileHover={{ opacity: 1, x: ['-100%', '100%'] }}
                transition={{ duration: 0.8 }}
            />


            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default Card;