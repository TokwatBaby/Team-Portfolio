import React from 'react'
import TeamIntro from '../components/TeamIntro';
import TeamMission from '../components/TeamMission';
import TeamVision from '../components/TeamVision';
import AboutUs from '../components/AboutUs';
import Expertise from '../components/Expertise';
import WelcomePage from '../components/WelcomePage';
import Intro from '../components/Intro'
import Header from '../components/Header';
import Team from '../components/Team';
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Homepage() {
  return (
    <>
    <Header/>
    {/* <WelcomePage/> */}
    <Intro/>
    {/* <TeamIntro/> */}
    {/* <TeamMission/> */}
    {/* <TeamVision/> */}
    <AboutUs/>
    <Expertise/>
    <Team/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Homepage
