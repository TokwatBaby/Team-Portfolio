import { motion } from "framer-motion";

function Footer() {

    return(

        <footer className="pt-[2px] bg-[linear-gradient(to_right,_#00FFFF,_#8A2BE2)]">
            <div className="text-center p-3 bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">
                <p className="text-white text-lg font-semibold antialiased">
                    &copy; {new Date().getFullYear()} DevNexus.
                    <span 
                    class="text-gray-400"> All rights reserved</span>
                </p>
            </div>
        </footer>

    );

}

export default Footer