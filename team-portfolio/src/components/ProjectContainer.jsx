import {FaHtml5, FaCss3, FaJs, FaPhp, FaBootstrap, FaDatabase} from "react-icons/fa";

const ProjectContainer = ({ProjectImg, ProjectTitle, ProjectDesc}) => {

    return (
        
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col space-y-4">
      
            <div className="rounded-2xl p-1 bg-gradient-to-b from-cyan-400 to-purple-600">
                <img
                    src={ProjectImg}
                    alt={ProjectTitle}
                    className="rounded-xl w-full h-64 object-cover"
                />
            </div>
    
            <h2>{ProjectTitle}</h2>
            <p>{ProjectDesc}</p>
    
            <div className="flex flex-wrap gap-2">
                <FaHtml5 color="#FF5733" size={25} />
                <FaCss3 color="#00A8E1" size={25} />
                <FaJs color="#F7DF1E" size={25} />
                <FaBootstrap color="#563D7C" size={25} /> 
                <FaDatabase color="#8A2BE2" size={25} />
                <FaPhp color="#4F5B93" size={25} />
            </div>
        </div>

    );

}

export default ProjectContainer