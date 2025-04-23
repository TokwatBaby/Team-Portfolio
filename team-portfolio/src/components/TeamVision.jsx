import lightbulb from '../assets/light-bulb.png';
import { motion } from "framer-motion";

function TeamVision() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.4 }}
        >
            <div className="flex justify-center items-center p-16">
                <div
                    className="w-[600px] p-[2.5px] rounded-xl bg-gradient-to-b 
    from-[#00FFFF] via-[#8A2BE2] to-[#00FFFF]  
    animate-slide-gradient hover:scale-105 group
    transition-transform duration-300"
                >
                    <div className="bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)] rounded-[10px] p-20 text-center">
                        <img src={lightbulb} alt="group" className="w-15 h-15 mx-auto" />
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                            <h2 className="text-white text-4xl font-bold">Vision</h2>
                        </div>
                        <p className="text-white text-sm mt-2 max-w-xs mx-auto">
                            To be a leading web development team recognized for delivering cutting-edge,
                            high-performance web solutions that empower businesses and individuals worldwide. We strive to shape the
                            digital landscape with innovation, collaboration, and excellence in web development.
                        </p>
                    </div>
                </div>
            </div>


        </motion.div>
    );
}

export default TeamVision;
