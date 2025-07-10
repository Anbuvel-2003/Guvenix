import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <div className="w-full bg-primary lg:!p-20 md:!p-20 !p-10">
            <div className="grid md:grid-cols-2 grid-cols-1  ">
                <div className="">
                    <div className="grid  ">
                        <span className="!mb-2">
                            <a href="/" className="text-white text-[20px] font-syne uppercase">
                                Guvenix
                            </a>
                        </span>
                        <span className="text-[#6e6e6e] text-[16px] font-syne text-left">
                            Guvenix Technologies is a forward-thinking technology company specializing in innovative digital solutions that empower businesses to thrive in the modern world. We provide a wide range of services, including web and mobile app development, UI/UX design, cloud integration, and automation tools tailored to meet the evolving needs of startups and enterprises alike.
                        </span>
                    </div>
                    <div className="grid !mt-4">
                        {/* <span className="!mb-2">
                            <a href="/" className="text-white text-[20px] font-syne uppercase">
                                Contact US
                            </a>
                        </span> */}
                        <div>
                            <div className="flex !mt-3 !gap-5">
                                <div>
                                    <a href="https://www.facebook.com/profile.php?id=61576821402403" target="_blank">
                                        <FaFacebookSquare size={30} color="#ffff" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/vineatztechnologies?igsh=dzJ4dno0anRwN2w2" target="_blank">
                                        <FaSquareInstagram size={30} color="#ffff" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/company/vineatz-technologies/" target="_blank">
                                        <FaLinkedin size={30} color="#ffff" />
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <FaSquareXTwitter size={30} color="#ffff" />
                                    </a>
                                </div>
                                <div>
                                    <a href="/">
                                        <FaSquareYoutube size={30} color="#ffff" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1  lg:!mt-0 md:!mt-0 !mt-5 ">
                    <div className="grid md:place-content-center sm:place-content-start">
                        <span className="text-white text-[20px] font-syne uppercase">
                            Company
                        </span>
                        <div className="grid !mt-4">
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Main
                                </a>
                            </span>
                            <span className="!mb-1">
                                {" "}
                                <a
                                    href="/portfolio"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Portfolio
                                </a>
                            </span>
                            <span className="!mb-1">
                                {" "}
                                <a
                                    href="/aboutUs"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    About Us
                                </a>
                            </span>
                            <span className="!mb-1">
                                {" "}
                                <a
                                    href="/contactUs"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Contact Us
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="grid md:place-content-center sm:place-content-start !mt-5 lg:!mt-0 md:!mt-0">
                        <span className="text-white text-[20px] font-syne uppercase">
                            services
                        </span>
                        <div className="grid !mt-4">
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    UI / UX Design
                                </a>
                            </span>
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Web app development
                                </a>
                            </span>
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Mobile app development
                                </a>
                            </span>
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    Testing Services
                                </a>
                            </span>
                            <span className="!mb-1">
                                <a
                                    href="/"
                                    className="text-[#6e6e6e] text-[16px] font-syne capitalize"
                                >
                                    DevOps services
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div>
                <div className="h-[1px] w-[100%] bg-[#6e6e6e] !my-10"></div>
                <div className="lg:flex md:flex sm:flex  grid justify-between items-center">
                    <div className="lg:mb-0 md:mb-0 sm:mb-0 !mb-5">
                        <h4 className="text-[#6e6e6e] ">
                            © 2025 <a href="/">Guvenix.</a> All Rights Reserved.
                        </h4>
                    </div>
                    <div className="lg:flex md:flex sm:flex flex items-center !gap-3">
                        <div>
                            <a
                                href="/"
                                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
                            >
                                Privacy Policy
                            </a>
                        </div>
                        <div>
                            <span className="text-[#6e6e6e]">|</span>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;