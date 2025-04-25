import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import {
    FaUserFriends,     // Empathize
    FaBullseye,        // Define
    FaLightbulb,       // Conceptualize
    FaDraftingCompass, // Prototype
    FaChartBar,        // Measurement
    FaSearch           // Observational Test
} from "react-icons/fa";
import {
    FaFacebook, FaInstagram, FaEnvelope, FaGithub,
    FaBasketballBall, FaTv, FaMusic, FaGamepad,
    FaPhp, FaJava, FaReact, FaBootstrap
} from "react-icons/fa";
import {
    SiJavascript, SiPython, SiHtml5, SiCss3,
    SiFigma, SiAdobephotoshop, SiCanva, SiMysql
} from "react-icons/si";
import profileImg from "../assets/dhanielstix.png";
import profileImg1 from "../assets/jaystix.png";
import profileImg2 from "../assets/jpstix.png";
import profileImg3 from "../assets/nixstix.png";
<<<<<<< HEAD
import profileImg4 from "../assets/nice.png";
import Footer from '../components/Footer'
=======
import profileImg4 from "../assets/rodstix.png";

>>>>>>> a07839a17c6bf21782f3c3fee3b27381c46ded8a

function GradientBullet() {
    return (
        <span
            className="inline-block w-4 md:w-6 h-4 md:h-6 rounded-full mr-px"
            style={{ background: "linear-gradient(180deg, #00FFFF, #8A2BE2)" }}
        ></span>
    );
}

function Profilepage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        // Check if there's a selected member in localStorage
        const selectedMember = localStorage.getItem('selectedMember');

        if (selectedMember) {
            const index = teamMembers.findIndex(member =>
                member.name === selectedMember
            );

            if (index !== -1) {
                setActiveIndex(index);

                // Scroll to the member's section after a short delay to ensure rendering
                setTimeout(() => {
                    const element = document.getElementById(selectedMember.replace(/,|\s+/g, "-"));
                    if (element) {
                        const scrollToElement = (target) => {
                            const start = window.scrollY;
                            const end = target.getBoundingClientRect().top + window.scrollY;
                            const distance = end - start;
                            const duration = 1000;
                            let startTime;

                            const scroll = (currentTime) => {
                                if (!startTime) startTime = currentTime;
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                window.scrollTo(0, start + distance * progress);

                                if (elapsed < duration) {
                                    window.requestAnimationFrame(scroll);
                                }
                            };

                            window.requestAnimationFrame(scroll);
                        };

                        scrollToElement(element);
                    }
                }, 200); // Delay of 200ms to ensure rendering

                // Clear the localStorage after use
                localStorage.removeItem('selectedMember');
            }
        } else {
            // Default behavior when no member is selected
            const element = document.getElementById(teamMembers[0].name.replace(/,|\s+/g, "-"));
            if (element) {
                const scrollToElement = (target) => {
                    const start = window.scrollY;
                    const end = target.getBoundingClientRect().top + window.scrollY;
                    const distance = end - start;
                    const duration = 1000;
                    let startTime;

                    const scroll = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        window.scrollTo(0, start + distance * progress);

                        if (elapsed < duration) {
                            window.requestAnimationFrame(scroll);
                        }
                    };

                    window.requestAnimationFrame(scroll);
                };
                scrollToElement(element);
            }
        }
    }, []);

    const scrollingRef = useRef(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            if (scrollingRef.current) return; // prevent updates during programmatic scroll

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Ensure refs are populated before observing
        requestAnimationFrame(() => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.observe(ref);
            });
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);
    const teamMembers = [
        {
            name: "Jan Harvey, Javier",
            role: "Full Stack Developer",
            title: "I'm a coding student focused on full stack development. I love tackling programming challenges and creating websites while learning both front-end and back-end skills.",
            profileImg: profileImg1,
            age: 25,
            birthdate: "Jan 2, 2000",
            phone: "0912-345-6789",
            email: "janharvey@example.com",
            socialIcons: [
                { Icon: FaFacebook, color: "#1877F2", link: "https://www.facebook.com/janjan0119" },
                { Icon: FaEnvelope, color: "#D44638", link: "https://mail.google.com/mail/?view=cm&fs=1&to=ic.janharvey.javier@cvsu.edu.ph" },
                { Icon: FaGithub, color: "#555555", link: "https://github.com/TokwatBaby" },
            ],
            workProcess: [
                { icon: FaUserFriends, label: "Empathize", color: "text-rose-400" },
                { icon: FaBullseye, label: "Define", color: "text-orange-400" },
                { icon: FaLightbulb, label: "Conceptualize", color: "text-yellow-400" },
                { icon: FaDraftingCompass, label: "Prototype", color: "text-blue-400" },
                { icon: FaChartBar, label: "Measurement", color: "text-indigo-400" },
                { icon: FaSearch, label: "Observational Test", color: "text-green-400" },
            ],
            skills: [
                { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
                { icon: SiCss3, label: "CSS", color: "text-blue-300" },
                { icon: FaPhp, label: "PHP", color: "text-violet-500" },
                { icon: FaJava, label: "Java", color: "text-red-500" },
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiPython, label: "Python", color: "text-blue-500" },
                { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
                { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-500" },
            ],
            interests: [
                { icon: FaGamepad, label: "Gaming", color: "text-green-400" },
                { icon: FaBasketballBall, label: "Basketball", color: "text-orange-500" },
                { icon: FaMusic, label: "Music", color: "text-purple-400" },
                { icon: FaTv, label: "Watching", color: "text-red-400" }
            ],
            uiUxDesign: [
                { icon: SiFigma, label: "Figma", color: "text-pink-500" },
                { icon: SiAdobephotoshop, label: "Photoshop", color: "text-blue-400" },
                { icon: SiCanva, label: "Canva", color: "text-indigo-400" }
            ]

        },
        {
            name: "Dhaniel, Lofamia",
            role: "Full Stack Developer",
            title: "I am a Full Stack Developer student with strong eagerness to learn and grow in the world of coding. I like to solve complex and logical problems, building dynamic web applications and continuously expanding my knowledge of front-end and back-end technologies.",
            profileImg: profileImg,
            age: 25,
            birthdate: "Jan 1, 2000",
            phone: "0912-345-6789",
            email: "dhaniel@example.com",
            socialIcons: [
                { Icon: FaFacebook, color: "#1877F2", link: "https://www.facebook.com/jeongyeooniee" },
                { Icon: FaInstagram, color: "#E1306C", link: " https://www.instagram.com/dhnlein?igsh=a2ttejM0M2JxeHdx" },
                { Icon: FaEnvelope, color: "#D44638", link: "https://mail.google.com/mail/?view=cm&fs=1&to=dhanieeel0907@gmail.com" },
                { Icon: FaGithub, color: "#555555", link: "https://github.com/karinaonly" },
            ],
            workProcess: [
                { icon: FaUserFriends, label: "Empathize", color: "text-rose-400" },
                { icon: FaBullseye, label: "Define", color: "text-orange-400" },
                { icon: FaLightbulb, label: "Conceptualize", color: "text-yellow-400" },
                { icon: FaDraftingCompass, label: "Prototype", color: "text-blue-400" },
                { icon: FaChartBar, label: "Measurement", color: "text-indigo-400" },
                { icon: FaSearch, label: "Observational Test", color: "text-green-400" },
            ],
            skills: [
                { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
                { icon: SiCss3, label: "CSS", color: "text-blue-300" },
                { icon: FaPhp, label: "PHP", color: "text-violet-500" },
                { icon: FaJava, label: "Java", color: "text-red-500" },
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiPython, label: "Python", color: "text-blue-500" },
                { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
                { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-500" },
            ],
            interests: [
                { icon: FaGamepad, label: "Gaming", color: "text-green-400" },
                { icon: FaBasketballBall, label: "Basketball", color: "text-orange-500" },
                { icon: FaMusic, label: "Music", color: "text-purple-400" },
                { icon: FaTv, label: "Watching", color: "text-red-400" }
            ],
            uiUxDesign: [
                { icon: SiFigma, label: "Figma", color: "text-pink-500" },
            ]
        },
        {
            name: "Carlos Jr. Nicol",
            role: "Full Stack Developer",
            title: "I'm a student learning full stack development with a passion for coding. I enjoy solving problems and building web applications while expanding my knowledge of both front-end and back-end technologies.",
            profileImg: profileImg3,
            age: 24,
            birthdate: "Jan 1, 2001",
            phone: "0912-345-6789",
            email: "ic.carlosjr.nicol@cvsu.edu.ph",
            socialIcons: [
                { Icon: FaFacebook, color: "#1877F2", link: "https://www.facebook.com/Payaat.06" },
                { Icon: FaEnvelope, color: "#D44638", link: "https://mail.google.com/mail/?view=cm&fs=1&to=ic.carlosjr.nicol@cvsu.edu.ph" },
                { Icon: FaGithub, color: "#555555", link: "https://github.com/6nix" },
            ],
            workProcess: [
                { icon: FaUserFriends, label: "Empathize", color: "text-rose-400" },
                { icon: FaBullseye, label: "Define", color: "text-orange-400" },
                { icon: FaLightbulb, label: "Conceptualize", color: "text-yellow-400" },
                { icon: FaDraftingCompass, label: "Prototype", color: "text-blue-400" },
                { icon: FaChartBar, label: "Measurement", color: "text-indigo-400" },
                { icon: FaSearch, label: "Observational Test", color: "text-green-400" },
            ],
            skills: [
                { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
                { icon: SiCss3, label: "CSS", color: "text-blue-300" },
                { icon: FaPhp, label: "PHP", color: "text-violet-500" },
                { icon: FaJava, label: "Java", color: "text-red-500" },
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiPython, label: "Python", color: "text-blue-500" },
                { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
                { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-500" },
            ],
            interests: [
                { icon: FaGamepad, label: "Gaming", color: "text-green-400" },
                { icon: FaMusic, label: "Music", color: "text-purple-400" },
                { icon: FaTv, label: "Watching", color: "text-red-400" }
            ],
            uiUxDesign: [
                { icon: SiFigma, label: "Figma", color: "text-pink-500" },
                { icon: SiAdobephotoshop, label: "Photoshop", color: "text-blue-400" },
                { icon: SiCanva, label: "Canva", color: "text-indigo-400" }
            ]

        },
        {
            name: "John Patrick, Macaspac",
            role: "Front End Developer",
            title: "I'm a front-end development student who loves turning designs into interactive websites. I'm constantly improving my skills in web technologies to create responsive and accessible user interfaces.",
            profileImg: profileImg2,
            age: 25,
            birthdate: "Jan 3, 2000",
            phone: "0912-345-6789",
            email: "johnpatrick@example.com",
            socialIcons: [
                { Icon: FaFacebook, color: "#1877F2", link: "https://www.facebook.com/JpMacaspac08" },
                { Icon: FaInstagram, color: "#E1306C", link: "https://www.instagram.com/jp_macaspac?igsh=bmhhd2lmNmc1ZzFl" },
                { Icon: FaEnvelope, color: "#D44638", link: "https://mail.google.com/mail/?view=cm&fs=1&to=ic.johnpatrick.macaspac@cvsu.edu.ph" },
                { Icon: FaGithub, color: "#555555", link: "https://github.com/JPMacaspac" },
            ],
            workProcess: [
                { icon: FaUserFriends, label: "Empathize", color: "text-rose-400" },
                { icon: FaBullseye, label: "Define", color: "text-orange-400" },
                { icon: FaLightbulb, label: "Conceptualize", color: "text-yellow-400" },
                { icon: FaDraftingCompass, label: "Prototype", color: "text-blue-400" },
                { icon: FaChartBar, label: "Measurement", color: "text-indigo-400" },
                { icon: FaSearch, label: "Observational Test", color: "text-green-400" },
            ],
            skills: [
                { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
                { icon: SiCss3, label: "CSS", color: "text-blue-300" },
                { icon: FaPhp, label: "PHP", color: "text-violet-500" },
                { icon: FaJava, label: "Java", color: "text-red-500" },
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiPython, label: "Python", color: "text-blue-500" },
                { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
                { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-500" },
            ],
            interests: [
                { icon: FaGamepad, label: "Gaming", color: "text-green-400" },
                { icon: FaBasketballBall, label: "Basketball", color: "text-orange-500" },
                { icon: FaMusic, label: "Music", color: "text-purple-400" },
                { icon: FaTv, label: "Watching", color: "text-red-400" }
            ],
            uiUxDesign: [
                { icon: SiFigma, label: "Figma", color: "text-pink-500" },
                { icon: SiAdobephotoshop, label: "Photoshop", color: "text-blue-400" },
                { icon: SiCanva, label: "Canva", color: "text-indigo-400" }
            ]

        },
        {
            name: "Rodney, Santos",
            role: "Front End Developer",
            title: "I'm a student learning front-end development with a passion for creating visually appealing and user-friendly websites. I enjoy working with HTML, CSS, and JavaScript to build engaging web experiences.",
            profileImg: profileImg4,
            age: 22,
            birthdate: "July 22, 2002",
            phone: "0992-421-0601",
            email: "rodneysantos22@gmail.com",
            age: 25,
            birthdate: "July 22, 2002 ",
            phone: "09924210601",
            email: "rodneyysantos22@gmail.com",
            socialIcons: [
                { Icon: FaFacebook, color: "#1877F2", link: "https://www.facebook.com/rodney.santos.397" },
                { Icon: FaInstagram, color: "#E1306C", link: "https://www.instagram.com/_ewankosayo_/" },
                { Icon: FaEnvelope, color: "#D44638", link: "https://mail.google.com/mail/?view=cm&fs=1&to=rodneysantos22@gmail.com" },
                { Icon: FaGithub, color: "#555555", link: "https://github.com/Rodney22-blimp" },
            ],
            workProcess: [
                { icon: FaUserFriends, label: "Empathize", color: "text-rose-400" },
                { icon: FaBullseye, label: "Define", color: "text-orange-400" },
                { icon: FaLightbulb, label: "Conceptualize", color: "text-yellow-400" },
                { icon: FaDraftingCompass, label: "Prototype", color: "text-blue-400" },
                { icon: FaChartBar, label: "Measurement", color: "text-indigo-400" },
                { icon: FaSearch, label: "Observational Test", color: "text-green-400" },
            ],
            skills: [
                { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
                { icon: SiCss3, label: "CSS", color: "text-blue-300" },
                { icon: FaPhp, label: "PHP", color: "text-violet-500" },
                { icon: FaJava, label: "Java", color: "text-red-500" },
                { icon: FaReact, label: "React", color: "text-cyan-400" },
                { icon: SiPython, label: "Python", color: "text-blue-500" },
                { icon: SiMysql, label: "MySQL", color: "text-blue-300" },
                { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
                { icon: FaBootstrap, label: "Bootstrap", color: "text-violet-500" },
            ],
            interests: [
                { icon: FaGamepad, label: "Gaming", color: "text-green-400" },
                { icon: FaBasketballBall, label: "Basketball", color: "text-orange-500" },
                { icon: FaMusic, label: "Music", color: "text-purple-400" },
                { icon: FaTv, label: "Watching", color: "text-red-400" }
            ],
            uiUxDesign: [
                { icon: SiFigma, label: "Figma", color: "text-pink-500" },
                { icon: SiAdobephotoshop, label: "Photoshop", color: "text-blue-400" },
                { icon: SiCanva, label: "Canva", color: "text-indigo-400" }
            ]

        },

    ];



    return (

        <>
        <div className="min-h-screen text-white px-4 sm:px-6 md:px-10 py-6 space-y-8 relative bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 relative">

                {/* Left Sidebar */}
                <motion.div
                    initial={{ y: -300, opacity: 0 }}
                    animate={{ y: 0, opacity: 5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="sticky top-10 h-screen overflow-y-auto z-10 w-full px-3 sm:px-4 lg:px-6 p-6 bg-gray-900 text-white font-semibold bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)] flex flex-col items-center bg-clip-text"
                >
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-16" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-md md:text-xl">&lt;/&gt;</span>
                        </div>
                        <span className="text-2xl md:text-3xl font-bold">DevNexus</span>
                    </div>

                    {/* About Us Header */}
                    <h2
                        className="text-3xl md:text-6xl font-bold mb-12 md:mb-24 text-center"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        About Us
                    </h2>
                    {/* Team Member List */}
                    <div className="text-left overflow-hidden">
                        <div className="h-[300px] md:h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            <ul className="space-y-4 md:space-y-6">
                                {teamMembers.map((member, index) => {
                                    const isActive = index === activeIndex;
                                    return (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 md:gap-3 cursor-pointer mb-4 md:mb-6 text-2xl md:text-4xl font-bold"
                                            onClick={() => {
                                                setActiveIndex(index);
                                                const id = member.name.replace(/,|\s+/g, "-");
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    // Custom scroll animation for slower scrolling
                                                    const scrollToElement = (target) => {
                                                        const start = window.scrollY;
                                                        const end = target.getBoundingClientRect().top + window.scrollY;
                                                        const distance = end - start;
                                                        const duration = 1000; // duration in ms (adjust for speed)
                                                        let startTime;

                                                        const scroll = (currentTime) => {
                                                            if (!startTime) startTime = currentTime;
                                                            const elapsed = currentTime - startTime;
                                                            const progress = Math.min(elapsed / duration, 1);
                                                            window.scrollTo(0, start + distance * progress);

                                                            if (elapsed < duration) {
                                                                window.requestAnimationFrame(scroll);
                                                            }
                                                        };

                                                        window.requestAnimationFrame(scroll);
                                                    };

                                                    scrollToElement(element);
                                                }
                                            }}
                                        >
                                            <span
                                                className="w-3 h-3 md:w-4 md:h-4 rounded-full transition duration-300"
                                                style={{
                                                    background: isActive
                                                        ? "linear-gradient(90deg, #00FFFF, #8A2BE2)"
                                                        : "#A3A3A3",
                                                    opacity: isActive ? 1 : 0.5,
                                                    flexShrink: 0,
                                                }}
                                            ></span>

                                            <span
                                                className={`transition duration-300 border-b-2 text-base sm:text-xl md:text-2xl lg:text-4xl ${isActive ? "text-white" : "text-gray-400"}`}
                                                style={{
                                                    opacity: isActive ? 1 : 0.6,
                                                    backgroundImage: isActive
                                                        ? "linear-gradient(90deg, #00FFFF, #8A2BE2)"
                                                        : "none",
                                                    WebkitBackgroundClip: isActive ? "text" : "none",
                                                    WebkitTextFillColor: isActive ? "white" : "inherit",
                                                    borderBottom: isActive ? "2px solid" : "transparent",
                                                    borderImage: isActive
                                                        ? "linear-gradient(90deg, #00FFFF, #8A2BE2) 1"
                                                        : "none",
                                                }}
                                            >
                                                {member.name}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <div className="lg:col-span-2 space-y-8 relative">
                    {/* Introduction */}
                    {teamMembers.map((member, index) => {
                        const memberId = member.name.replace(/,|\s+/g, "-");

                        return (
                            <div key={index} id={memberId}
                                ref={(el) => sectionRefs.current[index] = el}
                                className="mb-16 md:mb-24 relative">
                                {/* Right Gradient Line for this section */}
                                <div
                                    className="absolute right-px top-30 w-1 rounded-full hidden md:block"
                                    style={{
                                        background: "linear-gradient(180deg, #00FFFF, #8A2BE2)",
                                        height: "95%", // Adjusts based on content height
                                    }}
                                ></div>

                                {/* Left Gradient Line for this section */}
                                <div
                                    className="absolute left-[-12px] top-30 w-1 rounded-full hidden md:block"
                                    style={{
                                        background: "linear-gradient(180deg, #00FFFF, #8A2BE2)",
                                        height: "95%",
                                    }}
                                ></div>

                                {/* Introduction Heading */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                    className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 -translate-x-6 bg-clip-text pt-6 md:pt-10 relative z-10">
                                    <GradientBullet />
                                    Introduction
                                </motion.h2>
                                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center translate-y-6 md:translate-y-10 bg-clip-text">
                                    <motion.img
                                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        whileHover={{
                                            rotate: [0, 5, -5, 0], // Rotates back and forth on hover
                                            transition: {
                                                duration: 3, // Adjust to control the speed of the tilt
                                                repeat: Infinity, // Repeat infinitely while hovering
                                                repeatType: "loop", // Ensure the animation loops
                                                ease: "linear", // Use linear motion for constant speed
                                            }
                                        }}
                                        src={member.profileImg}
                                        alt={member.name}
                                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover animate-glow-img"
                                    />
                                    <div className="text-center lg:text-left translate-y-0 bg-clip-text">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                            className="text-3xl md:text-5xl font-bold mb-1 translate-y-2">{member.name.replace(",", "")}</motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                            className="text-lg md:text-xl text-gray-500 mb-2 translate-y-4 md:translate-y-10">{member.role}</motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                                            className="text-sm md:text-base translate-y-6 md:translate-y-15 px-2 md:px-0">
                                            {member.title}
                                        </motion.p>
                                        <div className="flex gap-3 md:gap-4 justify-center lg:justify-start text-3xl md:text-5xl translate-y-8 md:translate-y-20 mt-4 ">
                                            {member.socialIcons.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                    viewport={{ once: false, amount: 0.7 }}
                                                    transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
                                                    className="group transition-transform duration-200 hover:scale-110"
                                                >
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                        <item.Icon
                                                            className="text-4xl transition duration-200 group-hover:filter group-hover:drop-shadow-[0_0_2px_#00FFFF]"
                                                            style={{ color: item.color }}
                                                        />
                                                    </a>
                                                </motion.div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                {/* Personal Details | Work Process | Interests */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-15 translate-y-12 sm:translate-y-16 md:translate-y-25 translate-x-0 md:translate-x-10 bg-clip-text mt-8 ">
                                    {/* Personal Details */}
                                    <div className="mt-2 mb-8">
                                        <motion.h4
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                            className="text-lg md:text-xl mb-3 md:mb-4 text-white">Personal Details</motion.h4>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.650 }}
                                            className="grid grid-cols-2 text-sm md:text-base text-white mt-2 md:mt-4 translate-y-2 md:translate-y-5">
                                            <p className="font-semibold">Age:</p>
                                            <p>{member.age}</p>
                                            <p className="font-semibold">Birthdate:</p>
                                            <p>{member.birthdate}</p>
                                            <p className="font-semibold">Phone No.:</p>
                                            <p>{member.phone}</p>
                                            <p className="font-semibold">Email:</p>
                                            <p className="break-all md:break-normal">{member.email}</p>
                                        </motion.div>
                                    </div>

                                    {/* Work Process */}
                                    <div className="flex flex-col items-center text-center mb-8">
                                        <motion.h4
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                            className="text-xl mb-4">Work Process</motion.h4>
                                        <div className="grid grid-cols-3 gap-y-3 gap-x-3 text-1xl place-items-center">
                                            {member.workProcess.map((item, idx) => {
                                                const Icon = item.icon;
                                                const baseDelay = member.socialIcons.length * 0.2;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                        viewport={{ once: false, amount: 0.5 }}
                                                        transition={{ delay: baseDelay + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                                                        className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                                                    >
                                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                            <Icon className={`${item.color} text-2xl md:text-4xl group-hover:filter group-hover:drop-shadow-[0_0_4px_#00FFFF]`} />
                                                        </a>
                                                        <span className="text-[10px] md:text-xs text-white mt-1">{item.label}</span>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>



                                    {/* Interests */}
                                    <div className="flex flex-col items-center text-center mb-8">
                                        <motion.h4
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                            className="text-lg md:text-xl mb-3 md:mb-4">Interests</motion.h4>
                                        <div className="grid grid-cols-4 gap-1 text-xl md:text-2xl translate-y-2 md:translate-y-5 place-items-center">
                                            {member.interests.map((item, idx) => {
                                                const Icon = item.icon;
                                                const baseDelay = member.socialIcons.length * 0.2;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                        viewport={{ once: false, amount: 0.5 }}
                                                        transition={{ delay: baseDelay + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                                                        className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                                                    >
                                                        <div className="group-hover:filter group-hover:drop-shadow-[0_0_4px_#00B3B3]">
                                                            <Icon className={`${item.color} text-2xl md:text-4xl`} />
                                                        </div>
                                                        <span className="text-[10px] md:text-xs text-white mt-1">{item.label}</span>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Skills & UI/UX */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 translate-y-12 md:translate-y-20 bg-clip-text text-center pt-6 md:pt-10">
                                    {/* Skills */}
                                    <div>
                                        <motion.h4
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                            className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                                            <GradientBullet />
                                            SKILLS
                                        </motion.h4>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.750 }}
                                            className="mb-3 md:mb-4 text-gray-300 items-center text-center text-sm md:text-base px-2">Experienced in designing intuitive and user-friendly interfaces that enhance digital experiences and support seamless interaction.</motion.p>
                                        <div className="flex flex-wrap gap-3 md:gap-6 justify-center items-center text-2xl md:text-3xl mt-2 md:mt-4">
                                            {member.skills.map((item, idx) => {
                                                const Icon = item.icon;
                                                const baseDelay = member.socialIcons.length * 0.2;
                                                return (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                        viewport={{ once: false, amount: 0.5 }}
                                                        transition={{ delay: baseDelay + idx * 0.1, duration: 0.2, ease: "easeOut" }}
                                                        className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                                                    >
                                                        <div className="group-hover:filter group-hover:drop-shadow-[0_0_4px_#00B3B3]">
                                                            <Icon className={`${item.color} text-2xl md:text-4xl`} />
                                                        </div>
                                                        <span className="text-[10px] md:text-xs text-white mt-1">{item.label}</span>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* UI/UX */}
                                    <div>
                                        <motion.h4
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                            className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                                            <GradientBullet />
                                            UI/UX Design
                                        </motion.h4>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.750 }} className="mb-3 md:mb-4 text-gray-300 text-center px-2 text-sm md:text-base">Designing intuitive, user-friendly interfaces to improve digital experiences and create seamless interactions.</motion.p>
                                        <div className="flex gap-4 md:gap-6 justify-center text-2xl md:text-3xl">
                                            <div className="flex gap-4 md:gap-6 justify-center text-2xl md:text-3xl ">
                                                {member.uiUxDesign.map((item, idx) => {
                                                    const Icon = item.icon;
                                                    const baseDelay = member.socialIcons.length * 0.4;
                                                    return (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                            viewport={{ once: false, amount: 0.5 }}
                                                            transition={{ delay: baseDelay + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                                                            className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
                                                        >
                                                            <div className="group-hover:filter group-hover:drop-shadow-[0_0_4px_#00B3B3]">
                                                                <Icon className={`${item.color} text-2xl md:text-4xl`} />
                                                            </div>
                                                            <span className="text-[10px] md:text-xs text-white mt-1">{item.label}</span>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div >

        <Footer />
        </>
    );
}

export default Profilepage;