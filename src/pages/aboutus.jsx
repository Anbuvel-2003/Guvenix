import React from "react";
import aboutus from "../assets/aboutus2.png";
import aboutus1 from "../assets/aboutus1.png";
import aboutus3 from "../assets/aboutus3.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import { FaCheck } from "react-icons/fa6";

function Aboutus() {
    const field = [
        {
            id: 1,
            content: "Cloud-Native Development and Deployment",
        },
        {
            id: 2,
            content: "Automation Across Development and Operations",
        },
        {
            id: 3,
            content: "Cutting-Edge Frontend & Backend Stacks",
        },
        {
            id: 4,
            content: "Robust Security and Data Protection",
        },
        {
            id: 5,
            content: "AI and Analytics Integration",
        },
    ];
    return (
        <div className="lg:!mt-10 md:!mt-10 !mt-15">
            <div className="w-full !mb-10">
                <img src={aboutus} alt="" className="object-contain" />
            </div>
            {/* section 1 */}
            <div className="lg:!m-30 md:!m-20 !m-10  grid lg:grid-cols-3 grid-cols-1  !gap-10 lg:!gap-5">
                <div className="place-items-center">

                    <h3 className="text-[#383838] lg:text-[25px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
                        Ideas
                    </h3>
                    <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%] ">
                        We focus on solving real-world problems through innovative tech concepts.
                        Our ideas are driven by research, creativity, and user needs.
                        Each idea lays the groundwork for impactful digital solutions.
                    </p>
                </div>
                <div className=" place-items-center">

                    <h3 className="text-[#383838] lg:text-[25px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
                        Convert
                    </h3>
                    <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%]">
                        We turn ideas into functional, tested prototypes.
                        Using agile development, we iterate quickly and efficiently.
                        Our process ensures quality, usability, and market readiness.
                    </p>
                </div>
                <div className=" place-items-center ">
                    <h3 className="text-[#383838] lg:text-[25px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
                        Products
                    </h3>
                    <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%]">
                        Our products are built to solve business challenges.
                        They are scalable, reliable, and user-centric.
                        Each tool reflects our vision of smart digital transformation.
                    </p>
                </div>
            </div>
            {/* section 2 */}
            <div className="lg:!m-30 md:!m-20 !m-10 w-fit lg:flex grid !gap-10 ">
                <div className="lg:w-1/2 w-full">
                    <img
                        src={aboutus1}
                        alt=""
                        className="w-full h-full object-contain rounded-[10px]"
                        style={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                        }}
                    />
                </div>
                <div className="lg:w-1/2 w-full place-content-center lg:!pl-20 !pl-0">
                    <div className="flex !gap-5 !mb-6 place-items-start">
                        <div className="">
                            <div>
                                <h3 className="text-primary lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                                    Innovative Solutions Start Here
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                                    We generate forward-thinking ideas that address real business challenges.
                                    Every concept is rooted in creativity, strategy, and purpose.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex !gap-5 !mb-6 ">
                        <div className="">
                            <h3 className="text-primary lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                                Concepts Turn Into Code
                            </h3>
                            <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                                We bring ideas to life through rapid prototyping and agile development.
                                Our process ensures each solution is functional, tested, and ready to scale.
                            </h3>
                        </div>
                    </div>
                    <div className="flex !gap-5  !mb-6">
                        <div>
                            <h3 className="text-primary lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                                Powerful Tools, Real Impact
                            </h3>
                            <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                                We deliver smart, scalable digital products that drive business success.
                                Each product reflects innovation, quality, and a seamless user experience.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="lg:!m-30 md:!m-20 !m-10 lg:w-[88vw] w-[80%] lg:flex grid  ">
                <div className="lg:w-1/2 place-content-center w-full lg:!pr-20 !pr-0">
                    <div>
                        <div>
                            <h3 className="text-primary lg:text-[30px] md:text-[25px] text-[20px] ">
                                Mastering Modern Tech for Business Growth
                            </h3>
                        </div>
                        <div className=" !mt-10">
                            {field?.map((item, index) => {
                                return (
                                    <div key={item} className="flex !gap-5 !mb-7">
                                        <FaCheck size={20} color="#000" />
                                        <h4 className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px text-[#000] font-medium">
                                            {item?.content}
                                        </h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full ">
                    <img
                        src={aboutus3}
                        alt=""
                        className="w-full h-full object-contain rounded-[10px]"
                        style={{
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                        }}
                    />
                </div>
            </div>

            {/* Our Team */}
            <div className="lg:!m-30 md:!m-20 !m-10">
                <h3 className="text-[#000] font-semibold text-center lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px]">
                    Our Team
                </h3>
                <div className="grid lg:grid-cols-3 grid-cols-1 !gap-10 lg:w-[88vw] w-full !mt-10 justify-between">
                    <div
                        className="cursor-pointer  w-full h-full group "
                        style={{
                            boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
                        }}
                    >
                        <div className="relative w-full h-[70%] overflow-hidden">
                            <img
                                src={team1}
                                alt=""
                                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 "
                            />
                        </div>
                        <div className="!p-10">
                            <h3 className="text-primary lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                                Paul Walker
                            </h3>
                            <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                                Chief Executive Officer
                            </h3>
                        </div>
                    </div>

                    <div
                        className="cursor-pointer  w-full h-full group"
                        style={{
                            boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
                        }}
                    >
                        <div className="relative w-full h-[70%] overflow-hidden">
                            <img
                                src={team2}
                                alt=""
                                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 "
                            />
                        </div>
                        <div className="!p-10">
                            <h3 className="text-primary lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                                Jeanette Kingston
                            </h3>
                            <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                                Vice President
                            </h3>
                        </div>
                    </div>
                    <div
                        className="cursor-pointer  w-full h-full group"
                        style={{
                            boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
                        }}
                    >
                        <div className="relative w-full h-[70%] overflow-hidden">
                            <img
                                src={team3}
                                alt=""
                                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 "
                            />
                        </div>
                        <div className="!p-10">
                            <h3 className="text-primary lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                                Paul Walker
                            </h3>
                            <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                                Chief Executive Officer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;