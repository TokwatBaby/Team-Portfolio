const Input = ({label, textarea = false}) => {

    return (

        <div className='relative'>
            {textarea ? (

                <textarea type='text' id='placeholder' required
                    className='peer w-full h-60 bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)]
                                px-5 py-3 text-white text-sm border-b-3 border-[#494848]
                                focus:outline-none transition-all duration 100 '
                />    

            ) : (
                
                <input type='text' id='placeholder' required
                    className='peer w-full h-9 md:h-10 bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)]
                                px-4 py-3 text-white text-sm border-b-3 border-[#494848]
                                focus:outline-none transition-all duration 100 '
                />

            )}

            <div className="absolute bottom-0 left-0 w-full h-1 
                            bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] 
                            opacity-0 peer-focus:opacity-100 
                            transition-opacity duration-300 pointer-events-none " />

            <label for='placeholder'
                    className='absolute top-1 left-3 text-[#6E6E6E] font-bold text-base md:text-lg
                            peer-focus:top-[-12px] peer-focus:text-base peer-focus:text-transparent
                            peer-focus:bg-[linear-gradient(to_right,_#00FFFF,_#00A3FF)]
                            peer-focus:bg-clip-text peer-valid:top-[-12px] peer-valid:text-base
                            transition-all duration-100 bg-clip-text'>
                {label}
            </label>

        </div>

    );

}

export default Input
