import { ChevronDown } from "lucide-react";

const Card = ({ img, name, role }) => {

    return (

        <div className="w-[400px] p-[2.5px] rounded-xl bg-gradient-to-b 
                from-[#00FFFF] via-[#8A2BE2] to-[#00FFFF]  
                animate-slide-gradient hover:scale-105 group
                transition-transform duration-300 ">

            <div className="bg-black rounded-xl bg-[linear-gradient(to_bottom,_#1E1E1E,_#0D0D0D)] ">
                <div className="bg-[linear-gradient(to_bottom,_#333333,_#252525)]
                                rounded-xl pt-10 pb-5 flex flex-col gap-y-8 
                                items-center text-center bg-clip-text ">
                    <img src={img} alt="checklist" className="w-56 h-56 " />
                    <div>
                        <h1 className="text-white text-xl font-bold ">{name}</h1>
                        <p className="text-white text-sm font-bold
                                group-hover:text-transparent group-hover:bg-clip-text
                                group-hover:bg-[linear-gradient(to_right,_#00FFFF,_#8A2BE2)]
                                group-hover:transition-transform group-hover:duration-300 bg-clip-text">
                            {role}
                        </p>
                    </div>
                    <ChevronDown color="#00FFFF" strokeWidth={3} />
                </div>
            </div>
        </div>

    );

}

export default Card
