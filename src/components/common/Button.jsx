import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    iconPosition = 'left',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none relative overflow-hidden backdrop-blur-md';

    const variants = {
        primary:
            'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-purple-500/40',

        secondary:
            'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700',

        outline:
            'border border-blue-500 text-blue-400 hover:bg-blue-500/10',

        ghost:
            'text-slate-400 hover:bg-slate-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm gap-1.5',
        md: 'px-6 py-2.5 text-sm gap-2',
        lg: 'px-8 py-3 text-base gap-2',
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            {...props}
        >

            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* ✨ Shine effect */}
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.7 }}
                />
            )}


            {Icon && iconPosition === 'left' && (
                <motion.span
                    className="relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                >
                    <Icon className="w-4 h-4" />
                </motion.span>
            )}


            <span className="relative z-10">{children}</span>


            {Icon && iconPosition === 'right' && (
                <motion.span
                    className="relative z-10"
                    whileHover={{ x: [0, 5, 0] }}
                    transition={{ duration: 0.4 }}
                >
                    <Icon className="w-4 h-4" />
                </motion.span>
            )}
        </motion.button>
    );
};

export default Button;