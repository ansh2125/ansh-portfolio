import React from 'react';
import { motion } from 'framer-motion';


export const AnimatedLetters = ({ text, className = '', delay = 0 }) => {
    const letters = Array.from(text);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 180,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block text-white ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};


export const AnimatedWords = ({ text, className = '', delay = 0 }) => {
    const words = text.split(' ');

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 40,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 120,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block text-white ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block mr-2"
                    style={{ perspective: 1000 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};


export const TypewriterText = ({ text, className = '', speed = 40 }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return (
        <span className={`text-slate-300 ${className}`}>
            {displayText}
            {/* 🔥 Glowing Cursor */}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-[2px] h-6 ml-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            />
        </span>
    );
};


export const RevealText = ({ children, className = '', direction = 'up' }) => {
    const directions = {
        up: { y: 80 },
        down: { y: -80 },
        left: { x: 80 },
        right: { x: -80 },
    };

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, ...directions[direction] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 0.7,
                    ease: [0.6, -0.05, 0.01, 0.99],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimatedLetters;