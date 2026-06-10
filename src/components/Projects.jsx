import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const allProjects = [
    {
        id: 1,
        title: "MediChain – Online Healthcare Platform",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "MediChain is an online healthcare platform designed to streamline access and delivery through features like appointment booking, NGO integration, and child vaccination tracking. Built with the goal of supporting underserved communities, MediChain offers dedicated dashboards for both doctors and patients, promoting transparency, efficiency, and targeted medical aid.",
        stack: ["React", "Firebase", "Tailwind CSS", "HTML/CSS"],
        github: "https://github.com/Himanshukumar1306/MediChain",
        demo: "#"
    },
    {
        id: 2,
        title: "FinCalc – Smart Loan Calculator Platform",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "FinCalc is a modern financial planning web application designed to simplify loan management and repayment analysis through real-time calculations, interactive charts, and detailed amortization tracking. The platform allows users to calculate monthly EMI, total interest, and total payable amount by customizing factors like down payment, loan duration, interest rate, and extra payments. FinCalc also provides downloadable PDF reports with complete month-wise repayment details, helping users make smarter and more informed financial decisions.",
        stack: ["React", "Tailwind CSS"],
        github: "https://github.com/Himanshukumar1306/FinCalc.git",
        demo: "https://loan-calculator-taupe-psi.vercel.app/"
    },
    {
        id: 3,
        title: "Fasal – Multi Crop Disease Classification & AI Automated Drone System",
        category: "AI / ML",
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fasal is an AI-powered smart agriculture platform designed to automate crop monitoring and disease detection using drone technology and machine learning. The system utilizes a drone equipped with a Raspberry Pi, camera, GPS, and telemetry modules to capture real-time aerial images of agricultural fields. The collected data is uploaded to the cloud, where advanced AI models perform multi-crop disease classification and health analysis. The processed results are then displayed on an interactive dashboard, enabling farmers to monitor crop conditions, identify diseases early, and make data-driven farming decisions for improved productivity and sustainable agriculture.",
        stack: ["Python", "Machine Learning", "Raspberry Pi", "React"],
        github: "https://github.com/Himanshukumar1306/EPICS-AI",
        demo: "#"
    }
];

const Projects = () => {
    const filteredProjects = allProjects;

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-2 mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-magenta">Projects</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical prowess, architectural thinking, and design sensibilities.
                    </p>
                </motion.div>



                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                className="group relative bg-white dark:bg-[#0B1020] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-end items-center mb-3">
                                        <div className="flex gap-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Code"><FaGithub size={18} /></a>
                                            {project.demo !== "#" && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Live Demo"><FaExternalLinkAlt size={16} /></a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-neon-violet transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>


                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
