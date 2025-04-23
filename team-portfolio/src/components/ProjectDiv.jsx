import {FaHtml5, FaCss3, FaJs, FaPhp, FaBootstrap, FaDatabase} from "react-icons/fa";

const ProjectDiv = ({ProjectImg, ProjectTitle, ProjectDesc, href}) => {

    return (
        
        <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 gap-10">

            <div>
                <img
                    src={ProjectImg}
                    alt={ProjectTitle}
                    className="rounded-xl"
                />
            </div>
    
            <div className="flex flex-col text-white gap-8 py-6">
        
                <h2 className="text-3xl font-semibold">{ProjectTitle}</h2>
                <p className="text-1xl opacity-50">{ProjectDesc}</p>
        
                <div className="flex flex-wrap gap-2">
                    
                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaHtml5 color="#FF5733" size={30} />
                        <p className="text-base font-medium">HTML</p>
                    </div>

                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaCss3 color="#00A8E1" size={30} /> 
                        <p className="text-base font-medium">CSS</p>
                    </div>

                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaJs color="#F7DF1E" size={30} /> 
                        <p className="text-base font-medium">JavaScript</p>
                    </div>
                    
                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaBootstrap color="#563D7C" size={30} /> 
                        <p className="text-base font-medium">Bootstrap</p>
                    </div>

                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaDatabase color="#8A2BE2" size={30} /> 
                        <p className="text-base font-medium">MySQL</p>
                    </div>

                    <div className="flex items-center justify-center border-white border-2 rounded-4xl p-3 gap-1">
                        <FaPhp color="#4F5B93" size={30} /> 
                        <p className="text-base font-medium">PHP</p>
                    </div>

                </div>

                <a href={href} className="bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)] rounded w-fit px-4">
                    <button className="text-start text-lg text-transparent bg-[#FFFFFF] bg-clip-text font-bold py-4 
                                    hover:bg-[linear-gradient(to_right,_#00FFFF,_#00A3FF)] transition duration-300 ease-in-out">
                        Watch Demo →
                    </button>
                </a>    

            </div>

        </div>

    );

}

export default ProjectDiv