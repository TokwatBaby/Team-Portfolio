import harv from '../assets/harv.png';
import Card from './Card';

function Team () {

    return (

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <div className="absolute top-14 left-1/2 -translate-x-1/2 text-white 
                            opacity-4 text-[140px] font-extrabold z-0 scale-200">
                MEMBERS
            </div>

            <section className="relative flex flex-col justify-center items-center p-8">

                <div className="relative text-center">
                    <h1 className='text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                        GET TO KNOW US
                    </h1>
                </div>

                <div className="flex flex-col justify-center w-full h-full p-25">
                    <div className="flex flex-row justify-between gap-20 mb-15">
                        <Card 
                            img={harv}
                            name='Jan Harvey Javier'
                            role='FULL STACK DEVELOPER'
                        />                            
                        <Card 
                            img={harv}
                            name='Dhaniel Lofamia'
                            role='FULL STACK DEVELOPER'
                        />
                        <Card 
                            img={harv}
                            name='Carlos Jr Nicol'
                            role='FULL STACK DEVELOPER'
                        />
                    </div>
                    <div className="flex flex-row justify-between gap-20 mb-15 px-50">
                        <Card 
                            img={harv}
                            name='John Patrick Macaspac'
                            role='FRONT END DEVELOPER'
                        />
                        <Card 
                            img={harv}
                            name='Rodney Santos'
                            role='FRONT END DEVELOPER'
                        />
                    </div>
                </div>

            </section>

            <hr className='text-gray-600'/>

        </main>

    );

}

export default Team