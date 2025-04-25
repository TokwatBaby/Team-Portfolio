import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from 'react-icons/fa';
import { SiMysql, SiBootstrap } from 'react-icons/si';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import Payroll from "../assets/Expensa.png";
import Scholarship from "../assets/Scholarship.png";
import Alumni from "../assets/Alumni.png";
import ProjectDiv from '../components/ProjectDiv';
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.png';
import alumniss1 from '../assets/alumniss1.png';
import alumniss2 from '../assets/alumniss2.png';
import alumniss3 from '../assets/alumniss3.png';
import payrollss1 from '../assets/payrollss1.png';
import payrollss2 from '../assets/payrollss2.png';
import payrollss3 from '../assets/payrollss3.png';
import brgyss1 from '../assets/brgyss1.png';
import brgyss2 from '../assets/brgyss2.png';
import brgyss3 from '../assets/brgyss3.png';
import kapess1 from '../assets/kapess1.png';
import kapess2 from '../assets/kapess2.png';
import kapess3 from '../assets/kapess3.png';
import tiktokss1 from '../assets/tiktokss1.png';
import tiktokss2 from '../assets/tiktokss2.png';
import tiktokss3 from '../assets/tiktokss3.png';
import khimyrss1 from '../assets/khimyrss1.png';
import khimyrss2 from '../assets/khimyrss2.png';
import khimyrss3 from '../assets/khimyrss3.png';
import igss1 from '../assets/igss1.png';
import igss2 from '../assets/igss2.png';
import igss3 from '../assets/igss3.png';

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "CvSU Scholarship Management System",
      description: "Simplify scholarship applications, tracking, and awards with a centralized solution for Cavite State University - Imus Campus.",
      image: Scholarship,
      screenshots: [
        { src: ss3, label: "Dashboard", className: "zoom-in"  },
        { src: ss2, label: "Report", className: "zoom-in"  },
        { src: ss1, label: "Features", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
        [<FaJsSquare className="mr-1" />, "Javascript", "bg-yellow-400 text-black zoom-in"],
        [<SiBootstrap className="mr-1" />, "Bootstrap", "bg-purple-600 zoom-in"],
        [<SiMysql className="mr-1" />, "MySQL", "bg-blue-700 zoom-in"],
        [<FaPhp className="mr-1" />, "PHP", "bg-gray-600 zoom-in"],
      ]
    },
    {
      title: "Payroll Management System",
      description: "Efficiently manage employee compensation...",
      image: Payroll,
      screenshots: [
        { src: payrollss1, label: "Login/Signup", className: "zoom-in"  },
        { src: payrollss2, label: "Dashboard", className: "zoom-in"  },
        { src: payrollss3, label: "List of Employee", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
        [<FaJsSquare className="mr-1" />, "Javascript", "bg-yellow-400 text-black zoom-in"],
        [<SiBootstrap className="mr-1" />, "Bootstrap", "bg-purple-600 zoom-in"],
        [<SiMysql className="mr-1" />, "MySQL", "bg-blue-700 zoom-in"],
        [<FaPhp className="mr-1" />, "PHP", "bg-gray-600 zoom-in"],
      ],
    },
    {
      title: "Inventory Management System",
      description: "A modern and inviting website designed for a local coffee shop, offering customers a seamless way to explore the menu, view store locations, and place online orders.",
      image: khimyrss3,
      screenshots: [
        { src: khimyrss1, label: "Order Checkout", className: "zoom-in"  },
        { src: khimyrss2, label: "Services", className: "zoom-in"  },
        { src: khimyrss3, label: "About Us", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
        [<FaJsSquare className="mr-1" />, "Javascript", "bg-yellow-400 text-black zoom-in"],
        [<SiBootstrap className="mr-1" />, "Bootstrap", "bg-purple-600 zoom-in"],
        [<SiMysql className="mr-1" />, "MySQL", "bg-blue-700 zoom-in"],
        [<FaPhp className="mr-1" />, "PHP", "bg-gray-600 zoom-in"],
      ],
    },
    {
      title: "Alumni Management System",
      description: "Connect and engage with past graduates...",
      image: Alumni,
      screenshots: [
        { src: alumniss1, label: "Homepage", className: "zoom-in"  },
        { src: alumniss2, label: "Login/Signup", className: "zoom-in"  },
        { src: alumniss3, label: "Alumni List", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
        [<FaJsSquare className="mr-1" />, "Javascript", "bg-yellow-400 text-black zoom-in"],
        [<SiBootstrap className="mr-1" />, "Bootstrap", "bg-purple-600 zoom-in"],
        [<SiMysql className="mr-1" />, "MySQL", "bg-blue-700 zoom-in"],
        [<FaPhp className="mr-1" />, "PHP", "bg-gray-600 zoom-in"],
      ],
    },
    {
      title: "Barangay Management System",
      description: "A comprehensive Barangay Management System designed to streamline local governance and community services. This dynamic web platform enables efficient record-keeping of residents, issuance of barangay documents, monitoring of local incidents, and management of programs and projects.",
      image: brgyss3,
      screenshots: [
        { src: brgyss1, label: "Resident Registry", className: "zoom-in"  },
        { src: brgyss2, label: "Document Issuance", className: "zoom-in"  },
        { src: brgyss3, label: "Homepage", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
      ],
    },
    {
      title: "Espresso Markup Squad",
      description: "This project showcases a beautifully designed interface featuring rich imagery of coffee blends, brewing methods, and café culture. With smooth navigation and responsive design, the page offers a delightful user experience for coffee enthusiasts.",
      image: kapess1,
      screenshots: [
        { src: kapess1, label: "Homepage", className: "zoom-in"  },
        { src: kapess2, label: "Login/Signup", className: "zoom-in"  },
        { src: kapess3, label: "Order Checkout", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
      ],
    },
    {
      title: "Tiktok",
      description: "A playful and visually engaging static web page inspired by TikTok's iconic style, blended with a humorous clown theme. This project features eye-catching animations, bold colors, and a layout that mimics short-form video content presentation.",
      image: tiktokss2,
      screenshots: [
        { src: tiktokss1, label: "Login/Signup", className: "zoom-in"  },
        { src: tiktokss2, label: "Feed Page", className: "zoom-in"  },
        { src: tiktokss3, label: "User Profile", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
      ],
    },
    {
      title: "Instagram",
      description: "A sleek and responsive web-based interface that mirrors the user experience of Instagram. This project showcases seamless navigation through feeds, stories, and profiles using intuitive flow design.",
      image: igss1,
      screenshots: [
        { src: igss1, label: "Login/Signup", className: "zoom-in"  },
        { src: igss2, label: "Feed Page", className: "zoom-in"  },
        { src: igss3, label: "User Profile", className: "zoom-in"  },
      ],
      technologies: [
        [<FaHtml5 className="mr-1" />, "HTML", "bg-orange-500 zoom-in"],
        [<FaCss3Alt className="mr-1" />, "CSS", "bg-blue-500 zoom-in"],
      ],
    },
  ];

  const Modal = ({ project }) => {
    const { title, description, image, technologies, screenshots } = project;

    return (
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center p-40 pt-60 transition-opacity duration-500 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <div className="min-h-screen flex flex-col items-center justify-start w-full">
          <div className="bg-[#1a1a1a] text-white p-8 rounded-xl w-full max-w-7xl relative shadow-xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition"
            >
              <FaTimes />
            </button>

            <h2 className="text-3xl font-bold mb-1 typing">PROJECTS</h2>
            <p className="text-sm text-gray-400 mb-6 typing">Our Collection of Projects</p>

            <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
              <img
                src={image}
                alt="Project Cover"
                className="w-full md:max-w-sm rounded-lg shadow zoom-in"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 typing">{title}</h3>
                <p className="text-sm text-gray-300 mb-4 max-w-xl typing">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map(([icon, tech, bg], i) => (
                    <span
                      key={i}
                      className={`flex items-center text-xs px-3 py-1 rounded-full ${bg} text-white font-medium`}
                    >
                      {icon}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold border-l-4 border-cyan-400 pl-3 mb-4 slide-in-left">Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {screenshots.map(({ src, label, className }, i) => (
  <div
    key={i}
    className={`relative group rounded shadow overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-105 ${className || ''}`}
  >
    <img
      src={src}
      alt={label}
      className="w-full h-auto rounded shadow transition-opacity duration-700 ease-in-out group-hover:opacity-20"
    />
    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
      <span className="text-white text-xl font-semibold backdrop-blur-sm bg-black/80 px-4 py-2 rounded">
        {label}
      </span>
    </div>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="relative 2xl:p-20 lg:p-17 md:p-14 sm:p-11 bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
        <section className="relative flex flex-col gap-y-10">
          <div className='flex flex-col gap-10 px-8 sm:px-4 pt-8 sm:pt-8'>
            <div className='flex flex-row items-center gap-x-4 text-white'>
              <img src={logo} alt="logo" className='h-14 w-14 zoom-in' />
              <h1 className='text-4xl font-semibold typing'>DevNexus</h1>
            </div>
            <div className='bg-[linear-gradient(to_bottom,_#00FFFF,_#8A2BE2)] pl-1'>
              <div className='flex flex-col gap-y-4 text-white bg-[#0D0D0D] pl-4'>
                <h1 className='text-5xl font-semibold typing'>PROJECTS</h1>
                <span className='typing'>Our Collection of Projects</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-26 my-14'>
            {projects.map((project, index) => (
              <div key={index} onClick={() => setSelectedProject(project)}>
                <ProjectDiv
                  ProjectImg={project.image}
                  ProjectTitle={project.title}
                  ProjectDesc={project.description}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedProject && <Modal project={selectedProject} />}
      <Footer />
    </>
  );
}

export default ProjectPage;