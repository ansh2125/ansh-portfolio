import React from 'react';
import { motion } from 'framer-motion';


const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Loader = ({ setLoading }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >

            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
            </div>

            <div className="relative flex flex-col items-center gap-10">


                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >

                    <motion.div
                        className="absolute inset-0 rounded-2xl blur-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-40"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />


                    <motion.div
                        className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative z-10"
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(59,130,246,0.4)',
                                '0 0 60px rgba(168,85,247,0.6)',
                                '0 0 20px rgba(59,130,246,0.4)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <CodeIcon className="text-white" />
                    </motion.div>
                </motion.div>


                <motion.div
                    className="flex items-center gap-2 text-slate-300 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Loading
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                            }}
                        />
                    ))}
                </motion.div>


                <div className="w-56 h-[3px] bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.2, ease: 'easeInOut' }}
                        onAnimationComplete={() => setLoading(false)}
                    />
                </div>

            </div>
        </motion.div>
    );
};

export default Loader;