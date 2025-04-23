import React, { useState } from "react";

const names = [
    "Lofamia, Dhaniel",
    "Javier, Jan Harvey",
    "Macaspac, John Patrick",
    "Nicol, Carlos Jr.",
    "Santos, Rodney",
];

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 py-12 text-2xl scale-[1.3] bg-transparent">
            <div className="flex flex-col items-center justify-center text-white text-center h-full">
                {/* DevNexus Header */}
                <div className="flex items-center gap-3 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-12 -12 48 48"
                        fill="currentColor"
                        className="w-16 h-16 text-white"
                    >
                        <circle cx="12" cy="12" r="22" fill="none" stroke="white" strokeWidth="2" />
                        <path
                            fillRule="evenodd"
                            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold text-white">DevNexus</h1>
                </div>

                {/* About Us */}
                <h2 className="text-5xl font-bold mb-10 translate-y-10">About Us</h2>

                {/* Names List */}
                <ul className="text-2xl text-left translate-y-20 mb-8"> {/* Add margin-bottom here */}
                    {names.map((name, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <li
                                key={index}
                                className="flex items-center gap-3 cursor-pointer mb-4" 
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Bullet */}
                                <span
                                    className="w-4 h-4 rounded-full transition duration-300"
                                    style={{
                                        background: isActive
                                            ? "linear-gradient(90deg, #00FFFF, #8A2BE2)"
                                            : "#A3A3A3", // gray bullet if not selected
                                        flexShrink: 0,
                                    }}
                                ></span>

                                {/* Name */}
                                <span
                                    className={`transition duration-300 border-b-2 ${
                                        isActive ? "text-white" : "text-gray-400"
                                    }`}
                                    style={
                                        isActive
                                            ? {
                                                  backgroundImage:
                                                      "linear-gradient(90deg, #00FFFF, #8A2BE2)",
                                                  WebkitBackgroundClip: "text",
                                                  WebkitTextFillColor: "white",
                                                  borderBottom: "2px solid",
                                                  borderImage:
                                                      "linear-gradient(90deg, #00FFFF, #8A2BE2) 1",
                                              }
                                            : { borderBottomColor: "transparent" }
                                    }
                                >
                                    {name}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
