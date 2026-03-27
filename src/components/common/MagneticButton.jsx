import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', strength = 0.25 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        setPosition({
            x: x * strength,
            y: y * strength,
        });
    };

    const handleLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleLeave}
            animate={{
                x: position.x,
                y: position.y,
                scale: isHovered ? 1.05 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 250,
                damping: 12,
                mass: 0.5,
            }}
            className={`relative ${className}`}
        >

            <motion.div
                className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl opacity-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />


            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default MagneticButton;