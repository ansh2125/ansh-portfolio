import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxWrapper = ({
    children,
    speed = 0.3,
    direction = 'up', // up | down
    className = '',
}) => {
    const { scrollY } = useScroll();


    const rawY = useTransform(
        scrollY,
        [0, 1000],
        direction === 'up'
            ? [0, -300 * speed]
            : [0, 300 * speed]
    );


    const y = useSpring(rawY, {
        stiffness: 60,
        damping: 20,
        mass: 0.5,
    });

    return (
        <motion.div
            style={{ y }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxWrapper;