import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTrophy, FaLightbulb, FaBullhorn, FaCertificate,
    FaTimes, FaSearchPlus, FaSearchMinus, FaDownload,
    FaPrint, FaExpandArrowsAlt, FaUndo, FaRedo, FaEllipsisV, FaBars, FaPen
} from 'react-icons/fa';
import jsPDF from 'jspdf';

const certificates = [
    {
        id: 1,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Google IT Support Certificate",
        issuer: "Google Career Certificates",
        date: "24 DEC 2025",
        // Replace this with your actual local image or PDF
        fileUrl: "/google-it-cert.jpg"
    },
    {
        id: 2,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Software Engineering Job Simulation",
        issuer: "JPMorgan Chase & Co.",
        date: "December 4th, 2025",
        fileUrl: "/jpmorgan-cert.png"
    },
    {
        id: 3,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Technology Job Simulation",
        issuer: "Deloitte",
        date: "December 3rd, 2025",
        fileUrl: "/deloitte-cert.jpg"
    },
    {
        id: 4,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "COURSE CERTIFICATE",
        title: "Industrial IoT Markets and Security",
        issuer: "University of Colorado Boulder",
        date: "Nov 18, 2025",
        fileUrl: "/colorado-cert.jpg"
    },
    {
        id: 5,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "COURSE CERTIFICATE",
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "Nov 18, 2025",
        fileUrl: "/google-networking-cert.jpg"
    },
    {
        id: 6,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF RECOGNITION",
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "September 07, 2025",
        fileUrl: "/oracle-cert.jpg"
    },
    {
        id: 7,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Solutions Architecture Job Simulation",
        issuer: "AWS",
        date: "September 1st, 2025",
        fileUrl: "/aws-cert.jpg"
    },
    {
        id: 8,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Free AWS Certification Course",
        issuer: "Intellipaat Academy",
        date: "September 17, 2025",
        fileUrl: "/intellipaat-cert.jpg"
    },
    {
        id: 9,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Programming in Java",
        issuer: "vityarthi / VIT Bhopal University",
        date: "24 Sep 2025",
        fileUrl: "/vityarthi-java-final.jpg"
    },
    {
        id: 10,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Python Essentials",
        issuer: "vityarthi / VIT Bhopal University",
        date: "12/05/2024",
        fileUrl: "/python-essentials.jpg"
    },
    {
        id: 11,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Fundamentals of AI and ML",
        issuer: "vityarthi / VIT Bhopal University",
        date: "11 Dec 2023",
        fileUrl: "/fundamentals-ai-ml.png"
    },
    {
        id: 12,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF COMPLETION",
        title: "Learn Python Programming - Beginner to Master",
        issuer: "Udemy",
        date: "July 29, 2025",
        fileUrl: "/udemy-python.jpg"
    },
    {
        id: 13,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF PARTICIPATION",
        title: "Prelims Level 1 of the Tata Crucible Campus Quiz 2025",
        issuer: "Internshala / Tata Crucible",
        date: "12th Nov, 2025",
        fileUrl: "/tata-crucible.jpg"
    },
    {
        id: 14,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "CERTIFICATE OF PARTICIPATION",
        title: "TATA Crucible Campus Quiz 2025",
        issuer: "Unstop / Tata Group",
        date: "2025",
        fileUrl: "/unstop-tata.jpg"
    },
    {
        id: 15,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "NPTEL Online Certification",
        title: "Introduction to Machine Learning",
        issuer: "NPTEL Online Certification",
        date: "Jan-Apr 2025",
        fileUrl: "/nptel-ml.jpg"
    },
    {
        id: 16,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Storage",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate.png"
    },
    {
        id: 17,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Serverless",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-serverless.png"
    },
    {
        id: 18,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Security",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-security.png"
    },
    {
        id: 19,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Networking",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-networking.png"
    },
    {
        id: 20,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Databases",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-databases.png"
    },
    {
        id: 21,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Compute",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-compute.png"
    },
    {
        id: 22,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "TRAINED",
        title: "Getting Started with Cloud Ops",
        issuer: "AWS Educate",
        date: "2025",
        fileUrl: "/aws-educate-cloudops.png"
    },
    {
        id: 23,
        icon: <FaCertificate className="text-white" size={24} />,
        role: "SKILL BADGE • INTRODUCTORY",
        title: "Get Started with Cloud Storage",
        issuer: "Google Cloud",
        date: "2025",
        fileUrl: "/google-cloud-storage.png"
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
    const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.25));

    const handleDownloadPDF = async () => {
        if (!selectedCert || !selectedCert.fileUrl) return;

        try {
            // For real local assets this works perfectly. External URLs might face CORS.
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = selectedCert.fileUrl;

            img.onload = () => {
                const orientation = img.width > img.height ? 'landscape' : 'portrait';
                const pdf = new jsPDF({
                    orientation: orientation,
                    unit: 'px',
                    format: [img.width, img.height]
                });
                pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);
                pdf.save(`${selectedCert.title.replace(/\s+/g, '_')}.pdf`);
            };
        } catch (error) {
            console.error("Error generating PDF:", error);
            // Fallback: direct download
            const link = document.createElement('a');
            link.href = selectedCert.fileUrl;
            link.download = `${selectedCert.title}.png`;
            link.click();
        }
    };

    const handlePrint = () => {
        if (!selectedCert || !selectedCert.fileUrl) return;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Certificate - ${selectedCert.title}</title>
                    <style>
                        body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
                        img { max-width: 100%; max-height: 100%; object-fit: contain; }
                    </style>
                </head>
                <body>
                    <img src="${selectedCert.fileUrl}" onload="window.print(); window.close();" />
                </body>
            </html>
        `);
        printWindow.document.close();
    };

    const closeViewer = () => {
        setSelectedCert(null);
        setZoomLevel(1);
    };

    return (
        <section id="certificates" className="py-20 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-2 mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-electric-magenta">Certifications & Badges</span></h2>
                </motion.div>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gradient-to-r [&::-webkit-scrollbar-thumb]:from-neon-violet [&::-webkit-scrollbar-thumb]:to-electric-magenta [&::-webkit-scrollbar-thumb]:rounded-full items-stretch">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col flex-none w-[320px] sm:w-[350px] snap-center bg-[#130d26] p-6 rounded-2xl border border-neon-violet/30 shadow-lg hover:shadow-neon-violet/20 hover:border-neon-violet transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-violet/30 to-electric-magenta/30 border border-neon-violet/50 flex items-center justify-center">
                                    {cert.icon}
                                </div>
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest mt-2">{cert.role}</span>
                            </div>

                            <div className="flex-grow flex flex-col justify-center text-center px-2 mb-6">
                                <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                                <p className="text-neon-violet font-medium text-sm mb-2">{cert.issuer}</p>
                                <span className="text-xs text-gray-400 font-medium">{cert.date}</span>
                            </div>

                            <button
                                onClick={() => setSelectedCert(cert)}
                                className="w-full mt-auto py-3 rounded-lg bg-gradient-to-r from-neon-violet to-electric-magenta text-white text-sm font-bold text-center tracking-wider hover:opacity-90 transition-opacity"
                            >
                                VIEW CERTIFICATE
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom Interactive PDF Viewer Modal (Rendered via Portal to break out of z-index stacking context) */}
            {typeof window !== "undefined" && createPortal(
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8 bg-[#05010D]/95 backdrop-blur-3xl"
                            onClick={closeViewer}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-6xl h-[90vh] bg-[#161324] rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-white/10 relative"
                            >

                                {/* Outer Modal Title Header */}
                                <div className="h-16 flex items-center justify-between px-6 bg-[#171324] border-b border-white/5 flex-shrink-0">
                                    <div className="flex-1"></div>
                                    <h3 className="text-xl font-bold text-white text-center flex-1 whitespace-nowrap overflow-hidden text-ellipsis px-4">
                                        {selectedCert.title}
                                    </h3>
                                    <div className="flex-1 flex justify-end">
                                        <button
                                            onClick={closeViewer}
                                            className="text-white hover:text-red-400 transition-colors"
                                        >
                                            <FaTimes size={22} />
                                        </button>
                                    </div>
                                </div>

                                {/* Inner PDF Viewer Container */}
                                <div className="flex-grow flex flex-col bg-[#525659] mx-0 sm:mx-4 mb-4 rounded-b-lg overflow-hidden shadow-inner">
                                    {/* Viewer Toolbar */}
                                    <div className="h-14 bg-[#323639] border-b border-[#202124] flex items-center justify-between px-3 md:px-6 text-gray-300 select-none shadow-md z-10 w-full flex-shrink-0">
                                        {/* Left Section */}
                                        <div className="flex items-center space-x-2 md:space-x-4 flex-1">
                                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                                <FaBars size={16} />
                                            </button>
                                            <span className="text-sm font-semibold text-blue-300 truncate max-w-[120px] hidden sm:block">
                                                {selectedCert.title.substring(0, 10)}...
                                            </span>
                                            <div className="flex items-center space-x-2 ml-2">
                                                <div className="bg-[#202124] px-2 py-1 flex items-center justify-center text-xs font-mono rounded w-8 text-center border border-gray-600">
                                                    1
                                                </div>
                                                <span className="text-sm font-medium">/ 1</span>
                                            </div>
                                        </div>

                                        {/* Center Section - Zoom Controls */}
                                        <div className="flex items-center space-x-1 sm:space-x-2 flex-1 justify-center border-l border-r border-[#5f6368] px-2 sm:px-4 shrink-0 mx-2">
                                            <button onClick={handleZoomOut} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Zoom Out">
                                                <FaSearchMinus size={14} />
                                            </button>
                                            <div className="text-sm w-12 sm:w-16 text-center bg-[#202124] text-white rounded px-1 sm:px-2 py-1 font-mono">
                                                {Math.round(zoomLevel * 100)}%
                                            </div>
                                            <button onClick={handleZoomIn} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Zoom In">
                                                <FaSearchPlus size={14} />
                                            </button>
                                        </div>

                                        {/* Right Section - Tools */}
                                        <div className="flex items-center justify-end space-x-1 sm:space-x-2 flex-1">
                                            <div className="hidden lg:flex items-center space-x-1 border-r border-[#5f6368] pr-2 mr-2">
                                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Fit to Page"><FaExpandArrowsAlt size={14} /></button>
                                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Rotate"><FaRedo size={14} /></button>
                                                <span className="w-px h-5 bg-[#5f6368] mx-1"></span>
                                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Draw"><FaPen size={14} /></button>
                                                <span className="w-px h-5 bg-[#5f6368] mx-1"></span>
                                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Undo"><FaUndo size={14} /></button>
                                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Redo"><FaRedo size={14} /></button>
                                            </div>

                                            <button onClick={handleDownloadPDF} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Download">
                                                <FaDownload size={16} />
                                            </button>
                                            <button onClick={handlePrint} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Print">
                                                <FaPrint size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-white/10 rounded-full transition-colors ml-1 sm:ml-2">
                                                <FaEllipsisV size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Viewer Body */}
                                    <div className="flex-grow bg-[#525659] overflow-auto relative p-4 sm:p-8 flex items-center justify-center min-h-0">
                                        {selectedCert && selectedCert.fileUrl ? (
                                            <div
                                                className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out flex items-center justify-center p-2"
                                                style={{
                                                    transform: `scale(${zoomLevel})`,
                                                    transformOrigin: 'center center'
                                                }}
                                            >
                                                <img
                                                    src={selectedCert.fileUrl}
                                                    alt={selectedCert.title}
                                                    className="max-h-[75vh] max-w-full object-contain block select-none"
                                                    draggable={false}
                                                />
                                            </div>
                                        ) : (
                                            <div className="text-gray-300 text-center">
                                                <FaCertificate className="mx-auto text-gray-400 mb-4 opacity-50" size={64} />
                                                <p className="text-lg">Certificate file not available.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Certificates;
