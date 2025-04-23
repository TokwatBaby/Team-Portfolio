import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import x from '../assets/x.png';
import Input from './Input';

function Contact () {

    return (

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <div className="absolute top-14 left-1/2 -translate-x-1/2 text-white 
                            opacity-4 text-[140px] font-extrabold z-0 scale-200">
                CONTACT
            </div>

            <section className="relative flex flex-col justify-center items-center p-8">

                <div className="relative text-center">
                    <h1 className='text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                        CONTACT
                    </h1>
                </div>

                <div className='relative flex flex-col pt-20 px-80 gap-6 justify-center text-center'>
                    <h2 className='text-white text-4xl font-bold'>
                        Get in touch with us!
                    </h2>
                    <p className='text-white text-base font-medium'>
                        Fill out the email form below for inquiries, connect with us through our social 
                        media links, or calls us directly at (+63)9876543210. DevNexus are here to help 
                        and looking forward to hearing from you!
                    </p>
                </div>

                <div className='flex flex-row text-center justify-center items-center gap-x-10 m-8'>
                    <a href="#"><img src={facebook} alt="facebook" className='w-14 h-14' /></a>
                    <a href="#"><img src={linkedin} alt="linkedin" className='w-14 h-14' /></a>
                    <a href="#"><img src={github} alt="github" className='w-14 h-14' /></a>
                    <a href="#"><img src={x} alt="x" className='w-14 h-14' /></a>
                </div>

                <div className='grid grid-cols-2 gap-6 w-3xl'>
                    <div className="h-full">
                        <Input label='Name' />
                    </div>
                    <div className="h-full">
                        <Input label='Email' />
                    </div>
                    <div className="col-span-2 h-full">
                        <Input label='Subject' />
                    </div>
                    <div className="col-span-2 h-full">
                        <Input label='Message' textarea/>
                    </div>
                    <div className='col-span-2 h-full text-end'>
                        <button className='px-5 py-2 text-[#6E6E6E] font-bold text-lg
                                        bg-[linear-gradient(to_right,_#2E2E2E,_#3A3A3A)]
                                        hover:bg-[linear-gradient(to_right,_#00FFFF,_#00A3FF)]
                                        hover:text-white transition-all duration-100'>
                            Submit
                        </button>
                    </div>
                </div>

            </section>

        </main>

    );

}

export default Contact