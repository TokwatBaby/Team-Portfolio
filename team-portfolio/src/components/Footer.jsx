import { motion } from "framer-motion";

function Footer() {

    return(

        <footer className="pt-[2px] bg-[linear-gradient(to_right,_#00FFFF,_#8A2BE2)]">
            <div className="text-center p-3 bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">
                <motion.p 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay : 0.8}}
                className="text-white text-lg font-semibold antialiased">
                    &copy; {new Date().getFullYear()} DevNexus.
                    <motion.span 
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay : 0.9}}
                    class="text-gray-400"> All rights reserved</motion.span>
                </motion.p>
            </div>
        </footer>

    );

}

export default Footer