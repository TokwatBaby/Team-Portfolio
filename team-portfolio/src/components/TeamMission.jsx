import checklist from '../assets/checklist.png';
import { motion } from "framer-motion";

function TeamMission() {
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
                        <img src={checklist} alt="group" className="w-15 h-15 mx-auto" />
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                            <h2 className="text-white text-4xl font-bold">Mission</h2>
                        </div>
                        <p className="text-white text-sm mt-2 max-w-xs mx-auto">
                            Our mission is to design and develop high-quality web applications that enhance user engagement,
                            streamline business processes, and deliver outstanding digital experiences. We are committed to leveraging the latest web
                            technologies to create secure, responsive, and future-ready solutions.
                        </p>
                    </div>
                </div>
            </div>


        </motion.div>
    );
}

export default TeamMission;

