const Principle = ({img, heading, desc}) => {

    return (

        <div className="flex-1 p-[2.5px] rounded-xl bg-gradient-to-b 
                    from-[#00FFFF] via-[#8A2BE2] to-[#00FFFF]  
                    animate-slide-gradient">
            <div className="bg-black rounded-xl">
                <div className="bg-[linear-gradient(to_bottom,_#333333,_#252525)]
                                rounded-xl px-6 py-8 md:px-15 md:py-20 flex flex-col gap-5 
                                items-center justify-between text-center h-full">
                    <img src={img} alt="checklist" className="w-20 h-20" />
                    <h1 className="text-white text-4xl font-bold">{heading}</h1>
                    <p className="text-white text-base font-medium">{desc}</p>
                </div>
            </div>
        </div>
        
    );

}

export default Principle
