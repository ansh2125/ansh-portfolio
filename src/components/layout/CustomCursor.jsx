import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };

        const down = () => setClick(true);
        const up = () => setClick(false);


        const handleHover = (e) => {
            const target = e.target;
            if (
                target.closest('a, button, input, textarea, [data-cursor-hover]')
            ) {
                setHover(true);
            } else {
                setHover(false);
            }
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
            window.removeEventListener('mouseover', handleHover);
        };
    }, []);


    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>

            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: pos.x - 6,
                    y: pos.y - 6,
                    scale: click ? 0.7 : hover ? 1.8 : 1,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
            />


            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500/20 blur-xl pointer-events-none z-[9998] hidden md:block"
                animate={{
                    x: pos.x - 16,
                    y: pos.y - 16,
                    scale: hover ? 2 : 1,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                }}
            />


            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-purple-400/40 pointer-events-none z-[9997] hidden md:block"
                animate={{
                    x: pos.x - 20,
                    y: pos.y - 20,
                    scale: hover ? 1.6 : 1,
                    opacity: visible ? 0.6 : 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 18,
                }}
            />
        </>
    );
};

export default CustomCursor;