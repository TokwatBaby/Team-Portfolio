import React from 'react'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'
import Payroll from "../assets/Expensa.png";
import Scholarship from "../assets/Scholarship.png";
import Alumni from "../assets/Alumni.png";
import Inventory from "../assets/Login.png";
import ProjectDiv from '../components/ProjectDiv';

function ProjectPage () {

  return (
    
    <>

      <main className="relative 2xl:p-20 lg:p-17 md:p-14 sm:p-11
                      bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

          <section className="relative flex flex-col gap-y-10">
            
            <div className='flex flex-col gap-10 px-8 sm:px-4 pt-8 sm:pt-8'>
              <div className='flex flex-row items-center gap-x-4 text-white'>
                  <img src={logo} alt="logo" className='h-14 w-14' />
                  <h1 className='text-4xl font-semibold'>DevNexus</h1>
              </div>
              
              <div className='bg-[linear-gradient(to_bottom,_#00FFFF,_#8A2BE2)] pl-1'>
                <div className='flex flex-col gap-y-4 text-white bg-[#0D0D0D] pl-4'>
                    <h1 className='text-5xl font-semibold'>PROJECTS</h1>
                    <span>Our Collection of Projects</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col gap-16 sm:gap-26 my-14'>
                      <ProjectDiv 
                          ProjectImg={Scholarship}
                          ProjectTitle="Scholarship Management System"
                          ProjectDesc="A web application for Cavite State University - Imus Campus that allows students to apply for scholarships, 
                                      track their applications, and manage their scholarship information."
                      />
                      <ProjectDiv 
                          ProjectImg={Payroll}
                          ProjectTitle="Payroll Management System"
                          ProjectDesc="Efficiently manage employee compensation with accurate and automated payroll processing."
                      />
                      <ProjectDiv
                          ProjectImg={Inventory}
                          ProjectTitle="Inventory Management System"
                          ProjectDesc="Monitor stock levels and streamline inventory operations with real-time tracking for the campus
                                      uniform of Cavite State University - Imus Campus."
                      />
                      <ProjectDiv
                          ProjectImg={Alumni}
                          ProjectTitle="Alumni Management System"
                          ProjectDesc="Seamlessly connect and engage with past graduates through our intuitive alumni platform for
                                      the Cavite State University - Imus Campus."
                      />
                  </div>

          </section>

      </main>

      <Footer />

    </>

  );

}

export default ProjectPage
