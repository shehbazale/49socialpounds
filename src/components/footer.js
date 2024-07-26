import React from 'react'
import { MdOutlineMailOutline} from "react-icons/md";
import { FaLocationDot} from "react-icons/fa6";
import { BsFacebook} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
   <>
   <div className='pt-[50px] bg-[#024963]'>
    <div className='flex flex-col  md:flex-row flex-wrap justify-evenly pb-[50px]'>
     {/* left div */}
       <div className='py-2 px-2 md:w-[40%]'>
     <h1 className='text-[2.5vw] font-bold text-white'> <span className='text-[#f7b141]'>Get More, Pay Less</span> It's All In Our Jam-Packed Plans!</h1>
       <h1 className='w-3/4 text-[2.5vw] font-bold bg-[#f7b141] mt-4 text-[#024963] px-4 py-2 rounded-lg'>From £49 P/M</h1>
       <p className='text-white mt-4'>Affordable social media management, dynamic blog content, and strategic social media marketing solutions. Small price, big impact!</p>
       </div>
       {/* center div */}
       <div className='py-2 px-2 md:w-[13%]'>
        <h4 className='text-[#f7b141] text-[1.8vw] font-bold'>useful Links</h4>
        <p className='text-white text-[1.3vw] mt-3 hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'>Blog</p>
        <p className='text-white text-[1.3vw] mt-3 hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'>Privacy Policy</p>
        <p className='text-white text-[1.3vw] mt-3 hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'>Terms & Conditions</p>
        <p className='text-white text-[1.3vw] mt-3 hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'>Contact Us</p>
       </div>
       {/* right div */}
       <div className='py-2 px-2 md:w-[25%]'>
       <h4 className='text-[#f7b141] text-[1.8vw] font-bold'>Connect With Us</h4>
       <img className="h-8 md:h-20 mt-4 cursor-pointer" src="../assets/asset 0.webp" alt="logo"></img>
       <span className='flex items-center mt-4 text-white text-[1.3vw] hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'><MdOutlineMailOutline className='mr-2'/> <p>hello@49poundsocial.co.uk</p>       </span>
       <span className='flex items-center mt-3 text-white text-[1.2vw]
        hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer'>
        <FaLocationDot  className='mr-2'/> <p>5 Brayford Square, LONDON E1 0SG</p>   </span>
      
       <div className='flex justify-between flex-wrap w-[45%] mt-6'> 
        <a href='abc.com'><BsFacebook className='w-5 h-5 text-[#f7b141] transform transition-transform duration-300 hover:scale-110 cursor-pointer'/></a>
        <a href='abc.com'><FaInstagram className='w-5 h-5 text-[#f7b141] transform transition-transform duration-300 hover:scale-110 cursor-pointer'/></a>
        <a href='abc.com'><IoLogoTiktok className='w-5 h-5 text-[#f7b141] transform transition-transform duration-300 hover:scale-110 cursor-pointer'/></a>
        <a href='abc.com'><FaXTwitter className='w-5 h-5 text-[#f7b141] transform transition-transform duration-300 hover:scale-110 cursor-pointer'/></a>
        <a href='abc.com'><FaLinkedin className='w-5 h-5 text-[#f7b141] transform transition-transform duration-300 hover:scale-110 cursor-pointer'/></a>
       </div>
       </div>
    </div> 
    <div>
        <hr className='border-slate-500 w-[98%] mx-auto shadow-lg'/>
        </div>
   </div>
  
   {/* bottom footer */}
   <div className='flex items-center justify-center py-8 bg-[#024963]'> 

    <p className='text-[#f7b141]'>© Copyright 49 Pound Social – part of Aethon group Ltd Company number 15520393</p>
</div>
   </>
  )
}
