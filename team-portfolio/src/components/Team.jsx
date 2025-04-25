import harv from '../assets/harv.png';
import nyel from '../assets/nyel.png';
import nix from '../assets/nix.png';
import pits from '../assets/pits.png';
import rod from '../assets/rod.png';
import Card from './Card';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Team() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = (memberName) => {
        // Store the selected member in localStorage
        localStorage.setItem('selectedMember', memberName);
        navigate('/ProfilePage');
    };

    return (
        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">

            <hr className='text-gray-600'/>

            <div className="absolute top-24 left-1/2 -translate-x-1/2">
                <h1 className="members-text text-white opacity-4 text-[140px] font-extrabold z-0 scale-200">
                    MEMBERS
                </h1>
            </div>

            <div className="relative w-11/12 md:w-3/4 mx-auto text-gray-600 min-h-[30rem] flex items-start justify-center pt-20 bg-clip-text">

                <section className="relative flex flex-col justify-center items-center p-8 bg-clip-text">

                    <div className="relative text-center bg-clip-text">
                        <h1 className='get-2-know-text text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                            GET TO KNOW US
                        </h1>
                    </div>

                    <div className="flex flex-col justify-center w-full h-full p-25 bg-clip-text">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 mb-15 bg-clip-text px-4 sm:px-8 lg:px-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                                onClick={() => handleCardClick("Jan Harvey, Javier")}>
                                <Card
                                    img={harv}
                                    name='Jan Harvey Javier'
                                    role='FULL STACK DEVELOPER'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                                onClick={() => handleCardClick("Dhaniel, Lofamia")}>
                                <Card
                                    img={nyel}
                                    name='Dhanil Lofamia'
                                    role='FULL STACK DEVELOPER'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                                onClick={() => handleCardClick("Carlos Jr. Nicol")}>
                                <Card
                                    img={nix}
                                    name='Carlos Jr. Nicol'
                                    role='FULL STACK DEVELOPER'
                                />
                            </motion.div>
                        </div>


                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 mb-15 bg-clip-text px-4 sm:px-8 lg:px-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                                onClick={() => handleCardClick("John Patrick, Macaspac")}>
                                <Card
                                    img={pits}
                                    name='John Patrick, Macaspac'
                                    role='FRONT END DEVELOPER'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                                onClick={() => handleCardClick("Rodney, Santos")}>
                                <Card
                                    img={rod}
                                    name='Rodney Santos'
                                    role='FRONT END DEVELOPER'
                                />
                            </motion.div>

                        </div>
                    </div>

                </section>

                <hr className='text-gray-600' />
            </div>
        </main>

    );

}

export default Team;
