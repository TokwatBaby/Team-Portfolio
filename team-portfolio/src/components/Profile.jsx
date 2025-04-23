import {
    SiHtml5,
    SiCss3,
    SiPhp,
    SiJava,
    SiReact,
    SiPython,
    SiMysql,
    SiJavascript,
    SiBootstrap,
    SiFigma,
    SiAdobephotoshop,
    SiCanva
} from "react-icons/si";

import profileImg from "../assets/dhanielstix.webp";
import Nav from "../pages/Nav";

function Diamond({ text }) {
    return (
        <div className="relative w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rotate-45 flex items-center justify-center p-1 rounded-lg">
            <div className="-rotate-45 text-white font-semibold text-[9px] leading-tight text-center break-words max-w-[36px] bg-clip-text">
                {text}
            </div>
        </div>
    );
}
function Arrow() {
    return (
        <div
            className="text-white text-3xl mx-1 w-6 h-6 flex items-center justify-center bg-clip-text"
            style={{
                background: "linear-gradient(90deg, #00FFFF, #8A2BE2)",
                WebkitBackgroundClip: "text",
            }}
        >
            →
        </div>
    );
}
function GradientBullet() {
    return (
        <span
            className="inline-block w-3 h-3 rounded-full mr-px"
            style={{ background: "linear-gradient(180deg, #00FFFF, #8A2BE2)", }}
        ></span>
    );
}

function Profile() {
    return (
        <div className="min-h-screen text-white px-10 py-6 space-y-8 relative bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">

                {/* Left Sidebar */}
                <div className="w-full px-4 lg:px-20 p-6 bg-gray-900 text-white font-semibold min-h-screen bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
                    <Nav />
                </div>

                {/* Right Content */}
                <div className="lg:col-span-2 space-y-8 relative ">

                    {/* Left Gradient Line */}
                    <div
                        className="absolute left-[-24px] top-0 bottom-0 w-1 rounded-full"
                        style={{ background: "linear-gradient(180deg, #00FFFF, #8A2BE2)" }}
                    ></div>

                    {/* Right Gradient Line */}
                    <div
                        className="absolute right-[-1px] top-0 bottom-30 w-1 rounded-full"
                        style={{ background: "linear-gradient(180deg, #00FFFF, #8A2BE2)" }}
                    ></div>

                    {/* Introduction */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8 flex items-center gap-2 translate-x-10 bg-clip-text">
                            <GradientBullet />
                            Introduction
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-6 items-center translate-y-10 bg-clip-text">
                            <img src={profileImg} alt="Profile" className="w-80 h-80 object-cover" />
                            <div className="text-center lg:text-left translate-y-0 bg-clip-text">
                                <h3 className="text-5xl font-bold mb-1 bg-clip-text translate-y-2">Dhaniel Lofamia</h3>
                                <p className="text-xl text-gray-500 mb-2 translate-y-10 bg-clip-text">Full Stack Developer</p>
                                <p className="bg-clip-text translate-y-15 bg-opacity-0">
                                    I am a Full Stack Developer student with strong eagerness to learn and grow in the world of coding. I like to solve complex and logical problems, building dynamic web applications and continuously expanding my knowledge of front-end and back-end technologies.
                                </p>
                                <div className="flex gap-4 justify-center lg:justify-start text-5xl bg-clip-text translate-y-20">
                                    <FaFacebook className="text-gray-400" />
                                    <FaInstagram className="text-gray-400" />
                                    <FaEnvelope className="text-gray-400" />
                                    <FaGithub className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Personal Details | Work Process | Interests */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-15 translate-y-25 translate-x-10 bg-clip-text">

                        {/* Personal Details */}
                        <div className="mt-2 mb-8">
                            <h4 className="text-xl mb-4 text-white">Personal Details</h4>
                            <div className="grid grid-cols-2  text-white mt-4 translate-y-5">
                                <p className="font-semibold">Age:</p>
                                <p>25</p>
                                <p className="font-semibold">Birthdate:</p>
                                <p>Jan 1, 2000</p>
                                <p className="font-semibold">Phone No.:</p>
                                <p>0912-345-6789</p>
                                <p className="font-semibold">Email:</p>
                                <p>dhaniel@example.com</p>
                            </div>
                        </div>
                        {/* Work Process */}
                        <div className="text-center bg-clip-text mb-16">
                            <h4 className="text-xl mb-4 bg-clip-text">My Work Process</h4>
                            <div className="flex flex-wrap justify-center items-center gap-6 translate-y-5">
                                <Diamond text="Empathize" />
                                <Arrow />
                                <Diamond text="Define" />
                                <Arrow />
                                <Diamond text="Conceptualize" />
                                <Diamond text="Prototype" />
                                <Arrow />
                                <Diamond text="Measurement " />
                                <Arrow />
                                <Diamond text="Observational Test" />
                            </div>
                        </div>
                        {/* Interests */}
                        <div className="flex flex-col items-center text-center bg-clip-text mb-8">
                            <h4 className="text-xl mb-4 bg-clip-text">Interests</h4>
                            <div className="grid grid-cols-4 gap-2 text-2xl translate-y-5">
                                <div className="flex flex-col items-center">
                                    <FaBasketballBall className="text-gray-400" />
                                    <span className="text-xs text-white mt-1">Basketball</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaTv className="text-gray-400" />
                                    <span className="text-xs text-white mt-1">Watching</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaMusic className="text-gray-400" />
                                    <span className="text-xs text-white mt-1">Music</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaGamepad className="text-gray-400" />
                                    <span className="text-xs text-white mt-1">Gaming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Skills & UI/UX */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-6">
                        {/* SKILLS Section */}
                        <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                                <GradientBullet />
                                SKILLS
                            </h4>
                            <p className="mb-4 text-gray-300">Experienced in full-stack development using modern tools.</p>
                            <div className="grid grid-cols-3 gap-4 justify-items-center text-3xl">
                                <div className="flex flex-col items-center text-orange-600">
                                    <SiHtml5 />
                                    <span className="text-sm text-white mt-1">HTML</span>
                                </div>
                                <div className="flex flex-col items-center text-blue-500">
                                    <SiCss3 />
                                    <span className="text-sm text-white mt-1">CSS</span>
                                </div>
                                <div className="flex flex-col items-center text-indigo-600">
                                    <SiPhp />
                                    <span className="text-sm text-white mt-1">PHP</span>
                                </div>
                                <div className="flex flex-col items-center text-red-600">
                                    <SiJava />
                                    <span className="text-sm text-white mt-1">Java</span>
                                </div>
                                <div className="flex flex-col items-center text-cyan-500">
                                    <SiReact />
                                    <span className="text-sm text-white mt-1">React</span>
                                </div>
                                <div className="flex flex-col items-center text-yellow-500">
                                    <SiPython />
                                    <span className="text-sm text-white mt-1">Python</span>
                                </div>
                                <div className="flex flex-col items-center text-blue-800">
                                    <SiMysql />
                                    <span className="text-sm text-white mt-1">MySQL</span>
                                </div>
                                <div className="flex flex-col items-center text-yellow-400">
                                    <SiJavascript />
                                    <span className="text-sm text-white mt-1">JavaScript</span>
                                </div>
                                <div className="flex flex-col items-center text-purple-600">
                                    <SiBootstrap />
                                    <span className="text-sm text-white mt-1">Bootstrap</span>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design Section */}
                        <div className="text-center">
                            <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                                <GradientBullet />
                                UI/UX Design
                            </h4>
                            <p className="mb-4 text-gray-300">Creative design skills with user-centered focus.</p>
                            <div className="flex justify-center gap-6 text-4xl">
                                <div className="flex flex-col items-center text-pink-500">
                                    <SiFigma />
                                    <span className="text-sm text-white mt-1">Figma</span>
                                </div>
                                <div className="flex flex-col items-center text-blue-400">
                                    <SiAdobephotoshop />
                                    <span className="text-sm text-white mt-1">Photoshop</span>
                                </div>
                                <div className="flex flex-col items-center text-blue-300">
                                    <SiCanva />
                                    <span className="text-sm text-white mt-1">Canva</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
