
import React  from "react";
// import { ReactTyped } from "react-typed";
export default function Banner(){
    return(
        <section className="bg-[#024963] py-[60px]">
            <div className="container flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-row">
                {/* section left side */}
                <div className="mb-14 lg:mb-0 lg:w-1/2">
                    <h1 className="max-w-xl text-[4.9vw] leading-none text-white font-bold text-center
                    lg:text-10xl lg:text-left lg:leading-tight mb-5 ">Affordable Social Media Management.
                    </h1>
                    <p className=" max-w-xl text-center text-[#f7b141] font-bold text-[2vw]  lg:text-left lg:max-w-md">From Only £49 Per Month.</p>
                <div className="flex justify-center mt-5 lg:justify-start">
                    <button type="button" className="text-[#024963] bg-[#f7b141] text-xs font-bold
                    rounded-lg px-10 py-3 text-center hover:text-[#f7b141] hover:bg-white transition 
                    duration-300 ease-in-out">BOOK A CALL</button>
                    <button type="button" className="ml-4 text-[#024963] bg-white text-xs font-bold
                    rounded-lg px-10 py-3 text-center hover:text-[#f7b141] transition 
                    duration-300 ease-in-out">GET STARTED</button>
                </div>
                </div>
                {/* section right section */}
                <div className="lg:w-1/2">
                <img className=" ml-auto w-96 h-96 cursor-pointer" src="../assets/asset 1.webp" alt="logo"></img>
                </div>
                </div>
        </section>
    )
    // {/* <ReactTyped className="text-white" strings={["Here you can find anything",'helo']} typeSpeed={40}  backSpeed={50} loop={true}/> */}
}