import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


function Expertise() {

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
        <div className="pb-1 bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]"> 
            <motion.p 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center text-white text-4xl font-bold translate-y-2 sm:translate-y-10">
                Expertise and Focus area
            </motion.p>


            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)] rounded-lg p-10">
                    <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                    >Front-end Development</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                        className="description text-white text-sm">
                        Our Front-end development focuses on creating the visual and interactive
                        aspects of a website or web application with the use of HTML for structure,
                        CSS for aesthetic design, and JavaScript for the functionality. We also use
                        frameworks like ReactJS and Tailwind CSS to furthermore improve user experience.
                    </motion.p>
                    <div className="icon-row mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                    alt="HTML Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">HTML</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.350 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                                    alt="CSS Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">CSS</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.450 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                                    alt="Tailwind Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">Tailwind</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.550 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    alt="JavaScript Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">Javascript</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.650 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.7 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    alt="React Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">React.js</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)] rounded-lg p-10">
                <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    >Back-end Development</motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                        className="description text-white text-sm">
                        Our Back-end development focuses on handling the transaction between the system and the user ensuring a smooth data processing,
                        authentication, and business logic. Creating a robust server-side applications with a focus on security, scalability, and efficiency
                    </motion.p>
                    <div className="icon-row mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                    alt="Python Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">Python</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.450 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                    alt="PHP Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">PHP</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.550 }}
                            className="line-divider divider-line-horizontal"></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                            className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                    alt="Java Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">Java</span>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="border border-1 bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] rounded-lg p-1">
                <div className="frontend font-bold text-4xl text-white bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)] rounded-lg p-10">
                <motion.p
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    >Database Management</motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                        className="description text-white text-sm">
                        Our Database Management involves designing, maintaining, and optimizing data storage systems to ensure seamless data access and security, It includes working with relational database like MySQL. Our team ensures data integrity, performance optimization, and efficient handling of user.
                    </motion.p>
                    <motion.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}                        
                            className="icon-row mt-6">
                        <div className="flex flex-col items-center">
                            <div className="icon-circle">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                    alt="MySQL Icon"
                                />
                            </div>
                            <span className="mt-2 text-base font-semibold">MySQL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
