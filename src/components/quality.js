import React  from "react";
import { ReactTyped } from "react-typed";

export default function Quality(){
    return(
     <>
  <section className="py-[60px]">
            <div className="container flex flex-wrap items-center justify-center mx-auto md:px-2 md:flex-row">
                {/* section left side */}
                <div className="mb-14 lg:mb-0 lg:w-1/3">
                    <h1 className="max-w-xl text-[3.2vw] leading-none text-black font-bold text-center
                    lg:text-10xl lg:text-left lg:leading-tight mb-5 ">Quality Doesn't Have To Break The Bank.
                    </h1>
                    <h1 className="max-w-xl text-[2.1vw] leading-none text-black font-bold text-center
                    lg:text-10xl lg:text-left lg:leading-tight mb-5 ">At 49 Pound Social, we believe in delivering top-notch quality without the hefty price tag. With
                     our affordable rates, you can enjoy premium services that won't break the bank.
                    </h1>
                    <p className=" max-w-xl text-center 
                     lg:text-left lg:max-w-md">In today’s busy business world, managing social media can be a challenge. Our dedicated team handles your social media presence, allowing you to focus on your core operations while we ensure your brand stays active and engaged online. 
                     Let us take care of your social media, so you can focus on growing your business</p>
                <div className="flex justify-center mt-5">
                    <button type="button" className=" bg-[#f7b141] text-xs font-bold
                    rounded-lg px-10 py-3 text-center hover:text-[#f7b141] hover:bg-[#024963] transition 
                    duration-300 ease-in-out">GET STARTED</button>
                  
                </div>
                </div>
                {/* section right section */}
                <div className="lg:w-1/2">
                <img className=" ml-auto w-3/4 cursor-pointer" src="../assets/asset 2.webp" alt="logo"></img>
                </div>
                </div>
        </section>
        <div className="flex bg-[#024963] py-[40px] justify-center">
       <h1 className="max-w-xl text-[2.8vw] text-white leading-none font-bold"> A Social Media Company That's </h1>
        <ReactTyped className="text-[#f7b141] pl-3 text-[2.8vw] leading-none font-bold
         "
         strings={["Reliable",'Affordable','Creative']} typeSpeed={50}  backSpeed={100}  backDelay={1000} loop={true}/> 
        </div>
     </>
    )

}