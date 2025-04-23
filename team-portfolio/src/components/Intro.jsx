import { useRef, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import group from '../assets/group.png';
import Principle from './TeamMission';
import Principle1 from './TeamVision';
import { motion, useMotionValue, useSpring } from "framer-motion";

function Intro() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 15 });
    const springY = useSpring(y, { stiffness: 100, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const offsetX = e.clientX - rect.left - rect.width / 2;
            const offsetY = e.clientY - rect.top - rect.height / 2;
            setMousePos({ x: offsetX / 15, y: offsetY / 15 });
        };

        const handleMouseLeave = () => {
            setMousePos({ x: 0, y: 0 });
        };

        const container = containerRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        x.set(mousePos.x);
        y.set(mousePos.y);
    }, [mousePos]);

    return (
        <main className="relative flex flex-col justify-center
            px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:p-20
            bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <section className="relative flex flex-col justify-center p-4 sm:p-6 md:p-8">

                {/* Border corners */}
                <motion.div
                className="absolute top-0 left-0 w-24 h-24"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                {/* Top Line */}
                <div className="animated-corner h-[4px] w-full rounded-tl-2xl" />
                {/* Left Line */}
                <div className="animated-corner w-[4px] h-full rounded-tl-2xl absolute top-0 left-0" />
                </motion.div>

                <motion.div
                className="absolute top-0 right-0 w-24 h-24"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                <div className="animated-corner h-[4px] w-full rounded-tr-2xl" />
                <div className="animated-corner w-[4px] h-full rounded-tr-2xl absolute top-0 right-0" />
                </motion.div>

                <motion.div
                className="absolute bottom-0 left-0 w-24 h-24"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                <div className="animated-corner h-[4px] w-full absolute bottom-0 left-0 rounded-bl-2xl" />
                <div className="animated-corner w-[4px] h-full rounded-bl-2xl absolute top-0 left-0" />
                </motion.div>

                <motion.div
                className="absolute bottom-0 right-0 w-24 h-24"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                >
                <div className="animated-corner h-[4px] w-full absolute bottom-0 right-0 rounded-br-2xl" />
                <div className="animated-corner w-[4px] h-full rounded-br-2xl absolute top-0 right-0" />
                </motion.div>



                <div className="text-center m-10 sm:m-12 md:m-16 lg:m-20">
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        className='text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text 
                            bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                        Welcome to
                    </motion.p>

                    <motion.div
                        ref={containerRef}
                        style={{ x: springX, y: springY }}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut",delay : 0.7 }}
                        className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6'>
                        <motion.img
                            src={logo}
                            alt="logo"
                            className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" , delay : 0.9}}
                            whileHover={{ scale: 1.05 }}
                            className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>
                            DevNexus
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" , delay : 1.2 }}
                        className='text-transparent text-xl sm:text-2xl font-extrabold bg-clip-text 
                            bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]
                            inline-block border-b-2 border-gray-600 mt-20 sm:mt-32'>
                        A team composed of web developers
                    </motion.p>
                </div>
            </section>

            <section className='relative flex flex-col justify-center p-8'>
                <div
                    className='relative flex flex-col p-16 gap-6 items-center 
                        justify-center text-center -mb-25'>
                    <motion.img
                        src={group}
                        alt="group"
                        className='w-20 h-20'
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className='text-white text-4xl font-bold'>
                        Team Introduction
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" , delay: 0.5}}
                        className='text-white text-base font-medium'>
                        We are a team of passionate and innovative web developers committed to delivering high-quality,
                        scalable, and efficient digital solutions. With a strong foundation in both front-end and back-end
                        technologies, we specialize in creating responsive, user-friendly websites and powerful web
                        applications tailored to meet the unique needs of our clients. Our team thrives on collaboration,
                        continuous learning, and problem-solving...
                    </motion.p>
                </div>

                <div className="relative flex flex-col xl:flex-row justify-center items-center p-16 gap-16 text-base xl:text-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay : 0.5}}
                    >
                        <Principle />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay : 0.5}}
                    >
                        <Principle1 />
                    </motion.div>
                </div>
            </section>

            <hr className='text-gray-600' />
        </main>
    );
}

export default Intro;
