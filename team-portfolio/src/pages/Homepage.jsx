import React from 'react'
import AboutUs from '../components/AboutUs';
import Expertise from '../components/Expertise';
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
    <Intro/>
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
