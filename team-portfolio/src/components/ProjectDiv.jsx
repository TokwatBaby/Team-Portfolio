import logo from '../assets/logo.png';
import Scholarship from '../assets/Scholarship.png';
import Payroll from '../assets/Payroll.png';
import Inventory from '../assets/Inventory.png';
import Alumni from '../assets/Alumni.png';
import ProjectContainer from './ProjectContainer';

function ProjectDiv () {

    return (

        <main className="relative 2xl:p-20 lg:p-17 md:p-14 sm:p-11
                        bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <section className="relative flex flex-col gap-y-10">

                <div className='flex flex-row items-center w-full gap-x-4 text-white'>
                    <img src={logo} alt="logo" className='h-14 w-14' />
                    <h1 className='text-4xl font-semibold'>DevNexus</h1>
                </div>

                <div className='flex flex-col w-full gap-y-4 text-white'>
                    <h1 className='text-5xl font-semibold'>PROJECTS</h1>
                    <span>Our Collection of Projects</span>
                </div>

                <div className='grid gap-10 md:grid-cols-2'>
                    <ProjectContainer 
                        ProjectImg={Scholarship}
                        ProjectTitle="Scholarship Management System"
                        ProjectDesc="A web application that allows students to apply for scholarships, 
                                    track their applications, and manage their scholarship information."
                    />
                    <ProjectContainer 
                        ProjectImg={Payroll}
                        ProjectTitle="Payroll Management System"
                        ProjectDesc="A web application that allows students to apply for scholarships, 
                                    track their applications, and manage their scholarship information."
                    />
                    <ProjectContainer 
                        ProjectImg={Inventory}
                        ProjectTitle="Inventory Management System"
                        ProjectDesc="A web application that allows students to apply for scholarships, 
                                    track their applications, and manage their scholarship information."
                    />
                    <ProjectContainer 
                        ProjectImg={Alumni}
                        ProjectTitle="Alumni Management System"
                        ProjectDesc="A web application that allows students to apply for scholarships, 
                                    track their applications, and manage their scholarship information."
                    />
                </div>

            </section>

        </main>

    );

}

export default ProjectDiv