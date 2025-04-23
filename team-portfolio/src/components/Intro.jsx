import logo from '../assets/logo.png';
import group from '../assets/group.png';
import checklist from '../assets/checklist.png';
import lightbulb from '../assets/light-bulb.png';
import Principle from './Principle';

function Intro () {

    return (

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <section className="relative flex flex-col justify-center p-8">

                <div className="absolute top-0 left-0 w-24 h-24 border-t border-l
                         border-gray-600 rounded-tl-2xl"></div>       
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r
                         border-gray-600 rounded-tr-2xl"></div> 
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l
                         border-gray-600 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r
                         border-gray-600 rounded-br-2xl"></div>

                <div className="text-center m-20">
                    <div>
                        <p className='text-transparent text-6xl font-extrabold bg-clip-text 
                                        bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                            Welcome to
                        </p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <a href="#">
                            <img src={logo} alt="logo" className='w-50 h-50'/>
                        </a>
                        <h1 className='text-white text-8xl font-extrabold'>DevNexus</h1>
                    </div>
                    <div>
                        <p className='text-transparent text-2xl font-extrabold bg-clip-text 
                                        bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]
                                        inline-block border-b-2 border-gray-600 mt-40'>
                            A team composed of web developers
                        </p>
                    </div>
                </div>

            </section>

            <section className='relative flex flex-col justify-center p-8'>   

                <div className='relative flex flex-col p-16 gap-6 items-center 
                                justify-center text-center'>
                    <img src={group} alt="group" className='w-20 h-20' />
                    <h1 className='text-white text-4xl font-bold'>Team Introduction</h1>
                    <p className='text-white text-base font-medium'>
                    We are a team of passionate and innovative web developers committed to delivering high-quality, 
                    scalable, and efficient digital solutions. With a strong foundation in both front-end and back-end
                    technologies, we specialize in creating responsive, user-friendly websites and powerful web 
                    applications tailored to meet the unique needs of our clients. Our team thrives on collaboration, 
                    continuous learning, and problem-solving. From initial concept to final deployment, we work closely 
                    with our clients to turn their ideas into impactful, future-ready web solutions.
                    </p>
                </div>

                <div className="relative flex flex-col p-16 gap-16 xl:flex-row ">
                    <Principle 
                        img={checklist} 
                        heading="Mission" 
                        desc="Our mission is to design and develop high-quality web applications that enhance user engagement, 
                            streamline business processes, and deliver outstanding digital experiences. We are committed to 
                            leveraging the latest web technologies to create secure, responsive, and future-ready solutions."
                    />
                    <Principle
                        img={lightbulb}
                        heading="Vision"
                        desc="To be a leading web development team recognized for delivering cutting-edge, high-performance web 
                            solutions that empower businesses and individuals worldwide. We strive to shape the digital landscape 
                            with innovation, collaboration, and excellence in web development."    
                    />
                </div>

            </section>

            <hr className='text-gray-600'/>

        </main>

    );

}

export default Intro