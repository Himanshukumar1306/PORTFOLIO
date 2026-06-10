import React from 'react';
import { motion } from 'framer-motion';

import aboutRobot from '../assets/about-robot.png';

const About = () => {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start"
                >
                    <div className="relative w-full max-w-xs">
                        <img
                            src={aboutRobot}
                            alt="About Robot"
                            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(124,58,237,0.5)]"
                        />
                    </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 text-left"
                >
                    <span className="text-neon-violet font-bold tracking-wider uppercase text-5xl md:text-6xl block mb-8">About Me</span>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl font-medium">
                        Full Stack Developer with experience in Java, Python, C++, and JavaScript, specializing in building scalable web applications using MongoDB, Express, React, and Node.js. I have a growing interest in AI & Machine Learning and actively contribute to open-source projects, always striving to build efficient, impactful, and user-centric solutions.
                    </p>

                    <h2 className="text-xl md:text-2xl font-outfit text-gray-500 dark:text-gray-400 italic pt-6">
                        "Turning ideas into scalable products through clean code, modern tech, and intelligent systems."
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
