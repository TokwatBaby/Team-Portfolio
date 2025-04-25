import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaPhp, FaBootstrap, FaDatabase } from "react-icons/fa";

const ProjectDiv = ({ ProjectImg, ProjectTitle, ProjectDesc, href }) => {
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
                    {[{
                        icon: <FaHtml5 color="#FF5733" size={25} />, label: "HTML"
                    }, {
                        icon: <FaCss3 color="#00A8E1" size={25} />, label: "CSS"
                    }, {
                        icon: <FaJs color="#F7DF1E" size={25} />, label: "JavaScript"
                    }, {
                        icon: <FaBootstrap color="#563D7C" size={25} />, label: "Bootstrap"
                    }, {
                        icon: <FaDatabase color="#8A2BE2" size={25} />, label: "MySQL"
                    }, {
                        icon: <FaPhp color="#4F5B93" size={25} />, label: "PHP"
                    }].map(({ icon, label }, idx) => (
                        <motion.div
                            key={label}
                            className="flex items-center justify-center border-white border-2 rounded-4xl p-2 gap-1"
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
                            {icon}
                            <p className="text-base font-medium">{label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <a href={href} className="bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)] rounded w-fit px-2">
                    <motion.button
                        className="text-start text-base text-transparent bg-[#FFFFFF] bg-clip-text font-bold py-2 
                                   hover:bg-[linear-gradient(to_right,_#00FFFF,_#00A3FF)] transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        transition={{ ease: "easeOut" }}
                    >
                        Watch Demo →
                    </motion.button>
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDiv;
