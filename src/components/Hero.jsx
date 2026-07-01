import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroProfile from '../assets/hero-profile.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left space-y-6"
                >


                    <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-tight">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-violet to-cosmic-indigo">Himanshu Kumar</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-medium text-gray-400 dark:text-gray-300 min-h-[50px]">
                        <span>I am a </span>
                        <span>
                            <Typewriter
                                words={['Computer Science Student', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        Highly motivated Computer Science and Engineering undergraduate with a strong foundation in Python, Java, and C++. Skilled in full-stack development and eager to apply problem-solving abilities to real-world software projects.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500} 
                            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-violet to-electric-magenta text-white font-semibold shadow-lg shadow-neon-violet/25 hover:shadow-neon-violet/50 transform hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer inline-block"
                        >
                            View Projects
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Himanshu_Kumar_Resume.pdf"
                            className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/20 bg-transparent text-gray-800 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-center"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    {/* Glow Effect */}
                    <div className="absolute w-[300px] h-[300px] bg-neon-violet/30 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 glass-card bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-neon-violet/50">
                        <img
                            src={heroProfile}
                            alt="Kumar Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>




                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
