import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaPhp, FaBootstrap, FaDatabase } from "react-icons/fa";

const ICONS = {
    HTML: { icon: <FaHtml5 size={20} />, label: "HTML" },
    CSS: { icon: <FaCss3 size={20} />, label: "CSS" },
    JavaScript: { icon: <FaJs size={20} />, label: "JavaScript" },
    Bootstrap: { icon: <FaBootstrap size={20} />, label: "Bootstrap" },
    MySQL: { icon: <FaDatabase size={20} />, label: "MySQL" },
    PHP: { icon: <FaPhp size={20} />, label: "PHP" },
};

const TECH_STACKS = {
    "Barangay Management System": ["HTML", "CSS"],
    "Espresso Markup Squad": ["HTML", "CSS"],
    "Tiktok": ["HTML", "CSS"],
    "Instagram": ["HTML", "CSS"],
    "Alumni Management System": ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
};

const ProjectDiv = ({ ProjectImg, ProjectTitle, ProjectDesc, href, technologies }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const transitionSettings = {
        duration: 0.5,
        ease: "easeOut",
    };

    const defaultStack = ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"];
    const techKeys = TECH_STACKS[ProjectTitle] || defaultStack;
    const filteredTechStack = techKeys.map((key) => ICONS[key]);


    return (
        <motion.div
            className="grid 2xl:grid-cols-2 lg:grid-cols-1 gap-10 px-8 sm:px-4"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...transitionSettings, delay: isMobile ? 0 : 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ ...transitionSettings, delay: isMobile ? 0 : 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.img
                    src={ProjectImg}
                    alt={ProjectTitle}
                    className="rounded-xl w-full"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 5px 10px 3px rgba(0, 255, 255, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </motion.div>

            {/* Text & Tech Stack Section */}
            <motion.div
                className="flex flex-col text-white gap-5"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...transitionSettings, delay: isMobile ? 0 : 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Title */}
                <motion.h2
                    className="text-xl sm:text-2xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionSettings, delay: isMobile ? 0 : 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {ProjectTitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-base text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionSettings, delay: isMobile ? 0 : 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {ProjectDesc}
                </motion.p>

                {/* Tech Stack - now delayed after description */}
                <div className="flex flex-wrap gap-2">
                    {filteredTechStack.map((tech, idx) => {
                        const techItem = Array.isArray(tech) 
                            ? { icon: tech[0], label: tech[1], className: tech[2] }
                            : tech;
                            
                        return (
                            <motion.div
                                key={techItem.label}
                                className={`flex items-center justify-center border-white border-2 rounded-4xl p-2 gap-1`}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    ease: "easeOut",
                                    duration: 0.3,
                                    delay: isMobile ? 0 : 0.2 + idx * 0.1,
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                {techItem.icon}
                                <p className="text-base font-medium">{techItem.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDiv;