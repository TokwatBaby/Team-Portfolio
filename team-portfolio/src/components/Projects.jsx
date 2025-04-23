import React from "react";
import { motion } from "framer-motion";

// Import images
import ExpensaImg from "../assets/Expensa.png";
import ScholarshipImg from "../assets/Scholarship.png";
import AlumniImg from "../assets/Alumni.png";
import LoginImg from "../assets/Login.png";
import { useState, useEffect } from 'react';


function Projects() {
    const projects = [
        {
            image: ExpensaImg,
            description:
                "Efficiently manage employee compensation with accurate and automated payroll processing.",
        },
        {
            image: ScholarshipImg,
            description:
                "Simplify scholarship application, tracking, and awards with a centralized solution.",
        },
        {
            image: AlumniImg,
            description:
                "Seamlessly connect and engage with past graduates through our intuitive alumni platform.",
        },
        {
            image: LoginImg,
            description:
                "Monitors stock levels and streamlines inventory operations with real-time tracking.",
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
    
            // Initial check
            handleResize();
    
            // Listen for window resize
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <section className="text-white py-16 px-10 relative overflow-hidden bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
            {/* Title Block */}
            <div className="relative w-full border-t-4 border-gray-700 min-h-[20rem] flex items-center justify-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                >
                    <h1 className="projects-text absolute top-14 left-1/2 -translate-x-1/2 text-white 
                        opacity-4 text-[140px] font-extrabold z-0 scale-200">
                        PROJECTS
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                    className="projects-colored-text text-transparent text-5xl font-extrabold bg-clip-text 
                        bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block"
                >
                    PROJECTS
                </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 relative z-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flex w-full px-2 sm:px-0"
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: isMobile ? 0 : 0.2 + index * 0.2,
                        }}
                    >
                        {/* Vertical gradient line */}
                        <div
                            className="w-[2px] h-full"
                            style={{
                                background: "linear-gradient(to bottom, #00FFFF, #8A2BE2)",
                            }}
                        ></div>

                        {/* Main Content */}
                        <div className="flex flex-col w-full pl-4">
                            <div className="group project-image-container relative">
                                <div className="relative transition-all duration-300">
                                    <div className="p-[3px] rounded-xl bg-black transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-purple-600 bg-[position:100%_100%] bg-no-repeat bg-[length:200%_200%]">
                                        <div className="bg-black rounded-xl overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={`Project ${index}`}
                                                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="z-index project-description mt-4">
                                    <strong>
                                        {index === 0 && "Payroll Management System"}
                                        {index === 1 && "Scholarship Management System"}
                                        {index === 2 && "Alumni Management System"}
                                        {index === 3 && "Inventory Management System"}
                                    </strong>
                                    <br />
                                    <br />
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
