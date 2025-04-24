import groupPic from '../assets/grouppic.png';
import { IdCard, Goal } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


function AboutUs() {

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
        <div className="items-center bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">
            <div className="relative w-full max-w-6xl mx-auto min-h-[30rem] flex items-start justify-center pt-20 bg-clip-text px-4"
            >
                <div>
                    <h1 className="career-us-text absolute top-14 left-1/2 -translate-x-1/2 text-white opacity-10 text-[140px] font-extrabold z-0 scale-200">
                        CAREER
                    </h1>
                </div>

                <p className="about-us-text text-transparent text-5xl font-extrabold bg-clip-text 
                               bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block">
                    ABOUT US
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center -translate-y-50 px-4 gap-6 bg-clip-text">
                {/* Group Picture Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                    className="flex justify-center md:justify-end mb-6 md:mb-0"
                >
                    <motion.img
                        src={groupPic}
                        alt="Group Picture"
                        className="groupPicture w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 15px 30px rgba(0, 255, 255, 0.4)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                </motion.div>

                {/* Info Sections Animation */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.7 }}
                    className="flex flex-col gap-6 w-full md:w-1/2 bg-clip-text"
                >
                    {/* Team Background */}
                    <div className="flex items-start gap-4 bg-clip-text">
                        <div className="flex-1 pr-4 bg-clip-text">
                            <div className="flex items-center justify-end mb-3 bg-clip-text">
                                <IdCard className="text-blue-400 w-10 h-10 mr-2" />
                                <p className="text-white text-2xl font-bold ">Team Background</p>
                            </div>
                            <p className="text-white text-sm text-right bg-clip-text">
                                DevNexus was formed in the year 2025 with the goal of creating cutting-edge web applications that enhance user engagement.
                                The team of web developers is currently in their third year at Cavite State University - Imus Campus and is honing their skills in web technologies.
                                The team is composed of members knowledgeable in front-end, back-end development, and database management.
                            </p>
                        </div>
                        <div className="w-2 self-stretch rounded-full animated-border"></div>
                    </div>

                    {/* Purpose */}
                    <div className="flex items-start gap-4 bg-clip-text">
                        <div className="flex-1 pr-4 bg-clip-text">
                            <div className="flex items-center justify-end mb-3 bg-clip-text">
                                <Goal className="text-blue-400 w-10 h-10 mr-2" />
                                <p className="text-white text-2xl font-bold">Purpose</p>
                            </div>
                            <p className="text-white text-sm text-right bg-clip-text">
                                Our purpose is to develop high-performance, scalable, and secure web applications that help users thrive in the digital landscape.
                                We aim to deliver efficient, user-friendly, and future-ready web solutions to address the needs of our clients and users.
                            </p>
                        </div>
                        <div className="w-2 self-stretch rounded-full animated-border"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;
