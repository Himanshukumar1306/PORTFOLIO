import React from 'react';
import { motion } from 'framer-motion';
import mongodbFullImg from '../assets/mongodb-v2.png';
import expressImg from '../assets/express-white.png';

import reactImg from '../assets/react-cyan.png';

import nodeImg from '../assets/node-text-v2.png';

import jsImg from '../assets/js.png';

import tsImg from '../assets/ts.png';

import tailwindImg from '../assets/tailwind.png';

import htmlImg from '../assets/html.png';
import javaImg from '../assets/java.png';
import pythonImg from '../assets/python.png';
import cppImg from '../assets/cpp.png';
import githubImg from '../assets/github-white.png';
import vscodeImg from '../assets/vscode.png';
import LeetCodeActivity from './LeetCodeActivity';
import GitHubActivity from './GitHubActivity';

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative z-10 w-full overflow-hidden">
            {/* Background Enhancements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cosmic-indigo/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-2 mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-magenta">Proficiency</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-6xl mx-auto text-xl md:text-2xl whitespace-nowrap">
                        A comprehensive overview of the technologies, languages, and tools I use to bring ideas to life.
                    </p>
                    <div className="flex flex-col items-center gap-8 mt-8">
                        {/* Row 1 */}
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <img src={mongodbFullImg} alt="MongoDB" className="h-40 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={expressImg} alt="Express.js" className="h-24 opacity-90 hover:opacity-100 transition-opacity duration-300 invert brightness-0" />
                            <img src={reactImg} alt="React" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={nodeImg} alt="Node.js" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={jsImg} alt="JavaScript" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={tsImg} alt="TypeScript" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={tailwindImg} alt="Tailwind CSS" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <img src={htmlImg} alt="HTML" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={javaImg} alt="Java" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={pythonImg} alt="Python" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={cppImg} alt="C++" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                            <img src={githubImg} alt="GitHub" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300 invert brightness-0" />
                            <img src={vscodeImg} alt="VS Code" className="h-28 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <LeetCodeActivity />
                    <GitHubActivity />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
