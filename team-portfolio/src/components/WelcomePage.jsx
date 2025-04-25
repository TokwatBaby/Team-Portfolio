import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className="relative flex justify-center items-center min-h-screen px-4 bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
      {/* Corner borders */}
      <div className="absolute top-15 left-15 w-16 h-16 border-t-2 border-l-2 border-gray-600 rounded-tl-lg"></div>
      <div className="absolute top-15 right-15 w-16 h-16 border-t-2 border-r-2 border-gray-600 rounded-tr-lg"></div>
      <div className="absolute bottom-15 left-15 w-16 h-16 border-b-2 border-l-2 border-gray-600 rounded-bl-lg"></div>
      <div className="absolute bottom-15 right-15 w-16 h-16 border-b-2 border-r-2 border-gray-600 rounded-br-lg"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 sm:text-5xl md:text-6xl lg:text-7xl text-transparent text-5xl font-bold bg-clip-text 
          bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block"
        >
          Welcome to
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pb-16 sm:pb-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-12 -12 48 48"
            fill="currentColor"
            className="w-24 sm:w-32 h-24 sm:h-32 text-white"
          >
            <circle
              cx="12"
              cy="12"
              r="22"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <path
              fillRule="evenodd"
              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-inter font-bold text-white"
          >
            DevNexus
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center mt-4 sm:mt-8"
        >
          <p className="sm:text-xl md:text-2xl text-transparent text-5xl font-bold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block">
            A team composed of web developers
          </p>
          <div className="w-64 sm:w-120 h-px mt-4 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default WelcomePage;
