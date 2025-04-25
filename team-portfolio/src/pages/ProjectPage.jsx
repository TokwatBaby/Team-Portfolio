import React from 'react'
import Footer from '../components/Footer'
import logo from '../assets/logo.png'
import Payroll from "../assets/Expensa.png";
import Scholarship from "../assets/Scholarship.png";
import Alumni from "../assets/Alumni.png";
import Inventory from "../assets/Inventory.png";
import Barangay from "../assets/Barangay.png";
import Instagram from "../assets/Instagram.png";
import Tiktok from "../assets/tiktok.png";
import Espresso from "../assets/Espresso.png";
import ProjectDiv from '../components/ProjectDiv';



function ProjectPage () {

  return (
    
    <>

      <main className="relative 2xl:p-20 lg:p-17 md:p-14 sm:p-11
                      bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

          <section className="relative flex flex-col gap-y-10">
            
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
            
            <div className='flex flex-col gap-26 my-14'>
                      <ProjectDiv 
                          ProjectImg={Payroll}
                          ProjectTitle="Payroll Management System"
                          ProjectDesc="Efficiently manage employee compensation with accurate and automated payroll processing."
                      />
                      <ProjectDiv 
                          ProjectImg={Scholarship}
                          ProjectTitle="Scholarship Management System"
                          ProjectDesc="A web application for Cavite State University - Imus Campus that allows students to apply for scholarships, 
                                      track their applications, and manage their scholarship information."
                      />
                      <ProjectDiv
                          ProjectImg={Alumni}
                          ProjectTitle="Alumni Management System"
                          ProjectDesc="Seamlessly connect and engage with past graduates through our intuitive alumni platform for
                                      the Cavite State University - Imus Campus."
                      />
                      <ProjectDiv
                          ProjectImg={Inventory}
                          ProjectTitle="Inventory Management System"
                          ProjectDesc="A modern and inviting website designed for a local coffee shop, offering customers a seamless way to explore the menu, view store locations, and place online orders."
                      />
                      <ProjectDiv
                          ProjectImg={Barangay}
                          ProjectTitle="Barangay Management System"
                          ProjectDesc="A comprehensive Barangay Management System designed to streamline local governance and community services. This dynamic web platform enables efficient record-keeping of residents, issuance of barangay documents, monitoring of local incidents, and management of programs and projects."
                      />
                      <ProjectDiv
                          ProjectImg={Instagram}
                          ProjectTitle="Instagram Web Flow"
                          ProjectDesc="A sleek and responsive web-based interface that mirrors the user experience of Instagram. This project showcases seamless navigation through feeds, stories, and profiles using intuitive flow design."
                      />
                      <ProjectDiv
                          ProjectImg={Tiktok}
                          ProjectTitle="Tiktok Clone G Static Web"
                          ProjectDesc="A playful and visually engaging static web page inspired by TikTok's iconic style, blended with a humorous clown theme. This project features eye-catching animations, bold colors, and a layout that mimics short-form video content presentation."
                      />
                      <ProjectDiv
                          ProjectImg={Espresso}
                          ProjectTitle="Espresso Markup Squad"
                          ProjectDesc="This project showcases a beautifully designed interface featuring rich imagery of coffee blends, brewing methods, and café culture. With smooth navigation and responsive design, the page offers a delightful user experience for coffee enthusiasts."
                      />
                  </div>

          </section>

      </main>

      <Footer />

    </>

  );

}

export default ProjectPage