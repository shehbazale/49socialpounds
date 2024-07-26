import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
export default function Header(){
    const [toggle,setToggle] = useState(false);
    return(
      <>
            <div className="bg-[#024963] p-6">
            <div className="max-w-[1240px] items-center  flex justify-between  mx-auto px-4">
                <div> 
                    <img className="h-12 cursor-pointer" src="../assets/asset 0.webp" alt="logo"></img>
            
                </div>
                {
                    toggle ?
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
                }
             
                
                <ul className="hidden md:flex text-white gap-10 text-base ">
                    <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">OUR STORY</li>
                    <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">WHAT WE DO</li>
                    <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">SAMPLES</li>
                    <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">CONTACT</li>
                    <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">SIGN IN</li>
                </ul>
                {/* Responsive  */}
                <ul className={`duration-500 md:hidden w-full text-white text-sm fixed bg-black top-[96px] 
                ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className="p-2">OUR STORY</li>
                    <li className="p-2">WHAT WE DO</li>
                    <li className="p-2">SAMPLES</li>
                    <li className="p-2">CONTACT</li>
                    <li className="p-2">SIGN IN</li>
                </ul>
            </div>
            </div>
      </>
    )
}