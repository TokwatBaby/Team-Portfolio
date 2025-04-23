import { IoPeopleCircle } from "react-icons/io5";
import { motion } from "framer-motion";

function TeamIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      className="px-4 sm:px-8 md:px-16 lg:px-20 pt-10 bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]"
    >
      <div className="border-l-[3px] w-290  w-full sm:max-w-1xl border-transparent bg-clip-border ">
        <div className="pl-6">
          <div className="flex items-center">
            <h2 className="text-white text-2xl font-bold pr-2">
              Team Introduction
            </h2>
            <IoPeopleCircle className="text-blue-400 text-4xl" />
          </div>
          <p className="text-white text-sm">
            We are a team of dedicated web developers passionate about building
            dynamic, user-friendly, and scalable web applications. Our expertise
            spans front-end and back-end technologies, ensuring seamless digital
            experiences that drive success. With a focus on innovation and
            efficiency, we transform ideas into powerful web solutions.
          </p>
        </div>
        
      </div>
    </motion.div>
  );
}

export default TeamIntro;
