import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import assets
import ExpensaImg from "../assets/Expensa.png";
import ScholarshipImg from "../assets/Scholarship.png";
import AlumniImg from "../assets/Alumni.png";
import PayrollVideo from "../assets/videos/payroll.mp4";
import AlumniVideo from "../assets/videos/alumnivid.mp4";
import BarangayVideo from "../assets/videos/barangay.mp4";
import InstagramVideo from "../assets/videos/instagram.mp4";
import CoffeeVideo from "../assets/videos/Coffee.mp4";
import ScholarshipVideo from "../assets/videos/Scholarship.mp4";
import TiktokVideo from "../assets/videos/tiktok.mp4";
import EspressoVideo from "../assets/videos/Espresso.mp4";




function Projects() {
    const projects = [
        {
            media: PayrollVideo,
            type: "video",
            title: "Payroll Management System",
            description:
                "Efficiently manage employee compensation with accurate and automated payroll processing.",
        },
        {
            media: ScholarshipVideo,
            type: "video",
            title: "Scholarship Management System",
            description:
                "Simplify scholarship application, tracking, and awards with a centralized solution.",
        },
        {
            media: AlumniVideo,
            type: "video",
            title: "Alumni Management System",
            description:
                "Seamlessly connect and engage with past graduates through our intuitive alumni platform.",
        },
        {
            media: CoffeeVideo,
            type: "video",
            title: "Inventory Management System",
            description:
                "An intuitive system that monitors stock levels in real-time, helping businesses streamline inventory operations, reduce shortages, and optimize restocking with precision."
        },
        {
            media: BarangayVideo,
            type: "video",
            title: "Barangay Management System",
            description:
            "A static web page that showcases core features of a Barangay Management System, including resident profiling, document requests, and incident logging.",
        },
        {
            media: InstagramVideo,
            type: "video",
            title: "Instagram Clone Static Web Page",
            description:
                "A static web page that visually demonstrates the user interface and navigation flow of Instagram, including login, feed, and profile views.",
        },
        {
            media: TiktokVideo,
            type: "video",
            title: "Tiktok Clone Static Web Page",
            description: "A short TikTok-style video highlighting dynamic moments of student life at Cavite State University - Imus Campus."
        },
        {
            media: EspressoVideo,
            type: "video",
            title: "Espresso Markup Squad",
            description:
                "This platform offers an interactive experience where users can explore different coffee blends, brewing techniques, manage subscriptions"


        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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

            {/* Projects Grid */
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 relative z-10">
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
                                            {project.type === "video" ? (
                                                <video
                                                    src={project.media}
                                                    className="w-full h-[300px] object-cover"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={project.media}
                                                    alt={`Project ${index}`}
                                                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="z-index project-description mt-4">
                                    <strong>{project.title}</strong>
                                    <br />
                                    <br />
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
             <hr className='text-gray-600 mt-20'
              />
        </section>
    );
}

export default Projects;
