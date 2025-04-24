import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import x from '../assets/x.png';
import Input from './Input';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';



function ContactPage() {

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

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">

            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut"}}
                className="absolute top-14 left-1/2 -translate-x-1/2"
            >
                <h1 className="contact-text text-white opacity-4 text-[140px] font-extrabold z-0 scale-200">
                    CONTACT
                </h1>
            </motion.div>

            <section className="relative flex flex-col justify-center items-center p-8 bg-clip-text">

                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                    className="relative text-center bg-clip-text">
                    <h1 className='contact-colored-text text-transparent text-5xl font-extrabold bg-clip-text 
                            bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                        CONTACT
                    </h1>
                </motion.div>   

                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                    className='get-in-touch-div relative flex flex-col pt-20 px-80 gap-6 justify-center text-center bg-clip-text'>
                    <h2 className='text-white text-4xl font-bold bg-clip-text'>
                        Get in touch with us!
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                        className='text-white text-base font-medium bg-clip-text'>
                        Fill out the email form below for inquiries, connect with us through our social 
                        media links, or calls us directly at (+63)9876543210. DevNexus are here to help 
                        and looking forward to hearing from you!
                    </motion.p>
                </motion.div>

                <div className='flex flex-row text-center justify-center items-center gap-x-10 m-8 bg-clip-text '>
                    <motion.a
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                    href="#"><img src={facebook} alt="facebook" className=' w-14 h-14 ' /></motion.a>
                    <motion.a
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                    href="#"><img src={linkedin} alt="linkedin" className='w-14 h-14' /></motion.a>
                    <motion.a
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                    href="#"><img src={github} alt="github" className='w-14 h-14' /></motion.a>
                    <motion.a
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                    href="#"><img src={x} alt="x" className='w-14 h-14' /></motion.a>
                </div>

                <div className='grid grid-cols-2 gap-6 w-3xl bg-clip-text px-14 sm:px-10 md:px-6 lg:px-0'>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.3 }}
                        className="col-span-2 md:col-span-1 w-full">
                            <Input label='Name' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.4 }}
                        className="col-span-2 md:col-span-1 w-full">
                        <Input label='Email' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                        className="col-span-2 w-full">
                        <Input label='Subject' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.5 }}
                        className="col-span-2 w-full">
                        <Input label='Message' textarea/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 0.6 }}
                        className='col-span-2 h-full text-center md:text-end bg-clip-text'>
                        <button className='px-5 py-2 text-[#6E6E6E] font-bold text-lg
                                        bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)]
                                        hover:bg-[linear-gradient(to_right,_#00FFFF,_#00A3FF)]
                                        hover:text-white transition-all duration-100'>
                            Submit
                        </button>
                    </motion.div>
                </div>

            </section>

        </main>

    );

}

export default ContactPage
