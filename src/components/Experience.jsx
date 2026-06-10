import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Full Stack Web Development Internship",
        company: "FUTURE INTERNS",
        period: "May 2026",
        description: "Successfully completed a one-month intensive internship in Full Stack Web Development, gaining hands-on experience building and deploying dynamic web applications.",
        tech: ["React", "Node.js", "JavaScript", "Web Development"]
    },
    {
        role: "Bachelor of Technology (CSE)",
        company: "VIT Bhopal University",
        period: "2023 - 2027",
        description: "Pursuing Computer Science & Engineering. Building a strong foundation in modern computing technologies and software development.",
        tech: ["Java", "Python", "C++", "MERN Stack"]
    },
    {
        role: "Higher Secondary Education",
        company: "Future Campus, Kolkata",
        period: "2021 - 2023",
        description: "Completed Higher Secondary education with a focus on science and mathematics.",
        tech: ["Physics", "Chemistry", "Mathematics", "Biology"]
    },
    {
        role: "Secondary Education",
        company: "Maharishi Vidya Mandir, kolkata",
        period: "2020 - 2021",
        description: "Successfully completed Class 10 Board Examinations with a strong focus on core academics, establishing a solid foundation for higher education.",
        tech: ["Science", "Mathematics", "Computer Applications"]
    },

];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-2 mb-4">Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-magenta">Experience</span></h2>
                </motion.div>

                <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-6 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-[#05010D] bg-neon-violet shadow-[0_0_10px_rgba(124,58,237,0.5)]"></div>

                            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                                <div className="md:col-span-2 mb-2 md:mb-0 md:text-right relative">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                                    <p className="text-neon-violet font-medium">{exp.role}</p>
                                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="md:col-span-3 bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-neon-violet/10 text-neon-violet">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
