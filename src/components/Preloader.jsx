import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    "Hello",       // English
    "你好",         // Mandarin
    "¡Hola!",      // Spanish
    "مرحبا",       // Arabic
    "হ্যালো",      // Bengali
    "Привет",      // Russian
    "Olá",         // Portuguese
    "Salut",       // French
    "Hallo",       // German
    "Ciao",        // Italian
    "こんにちは",     // Japanese
    "안녕하세요",     // Korean
    "Halo",        // Indonesian
    "Merhaba",     // Turkish
    "Cześć",       // Polish
    "Hej",         // Swedish/Danish
    "Hei",         // Norwegian
    "नमस्ते"        // Hindi (Last)
];

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const timer = setTimeout(() => {
                setIndex(index + 1);
            }, 180); // Reduced speed (was 120ms, now 180ms per word)
            return () => clearTimeout(timer);
        } else {
            // Once all words have been shown, wait a bit longer on the final word
            const finalTimer = setTimeout(() => {
                if (onComplete) onComplete();
            }, 500);
            return () => clearTimeout(finalTimer);
        }
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#05010D] text-white overflow-hidden"
        >
            <div className="flex items-center text-4xl md:text-5xl font-bold font-outfit">
                <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-neon-violet mr-4 animate-pulse"></span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="tracking-wider"
                    >
                        {greetings[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Preloader;
