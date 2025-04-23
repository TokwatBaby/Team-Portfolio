function About() {

    return (

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_top,_#0D0D0D,_#1E1E1E)]">

            <div className=" absolute top-14 left-1/2 -translate-x-1/2 flex text-center text-white 
                            opacity-4 text-[150px] font-extrabold z-0 scale-150">
                ABOUT US
            </div>

            <section>

                <div className="relative text-center">
                    <h1 className='text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                        ABOUT US
                    </h1>
                </div>

            </section>
            
            <hr className='text-gray-600'/>

        </main>

    );

}

export default About