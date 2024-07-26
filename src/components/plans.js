import React, {useState, useEffect} from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
export default function Plans() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Set isVisible to true after a short delay to trigger the animation
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000); // Adjust the delay as needed
    
        // Clear the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
     <div className="px-5 pt-12 mx-auto md:pt-[100px] pb-[50px]">
        <div className='text-center '>
            <h1 className='text-2xl md:text-5xl font-bold mb-5'>Our Social Media Management Plans.</h1>
            <h5 className='text-base md:text-lg text-black mb-1'>Explore our budget-friendly social media management bundles</h5>
            
        </div>
      </div>
    <div className="flex flex-col md:flex-row md:justify-center pb-[100px]">
      {/* Card 1 */}
      <div className={`max-w-sm rounded-3xl overflow-hidden mx-2 my-2 bg-white border-2 border-[#024963] transition-transform duration-1000 transform ${isVisible ? 'translate-x-0' : 'translate-x-[-150%]'}`}>
        <div className="px-12 py-10">
        <div className='text-center '>
        <h2 className='text-1xl md:text-5xl font-bold mb-5 text-[#024963]'>Affordable</h2>
        <h5 className='text-1xl md:text-2xl font-bold mb-5 text-[#024963]'>£49/month</h5>
        <p  className='text-lg pb-4'>For startups on a tight budget.</p>
        </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>High-Quality Visuals</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>2 Posts Per Week</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Captions & Hashtags</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Scheduling & Posting</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Facebook</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Twitter</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Linkedin</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Tik Tok</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>UK-Based Content Creator</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Add-On Services Available</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Monthly Rolling Plan</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Email Support</span>
             </div>
          <p className="rounded-lg mt-5 bg-[#f7b141] text-center text-[#024963] py-3 font-bold text-[0.9rem]
          transition-transform duration-300 transform hover:scale-90 cursor-pointer">SIGN UP NOW</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm rounded-3xl overflow-hidden mx-2 my-2 bg-[#f7b141]">
        <div className="px-12 py-10">
        <div className='text-center '>
        <h2 className='text-1xl md:text-5xl font-bold mb-5 text-[#024963]'>Affordable</h2>
        <h5 className='text-1xl md:text-2xl font-bold mb-5 text-[#024963]'>£49/month</h5>
        <p  className='text-lg pb-4'>For startups on a tight budget.</p>
        </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>High-Quality Visuals</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>2 Posts Per Week</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Captions & Hashtags</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Scheduling & Posting</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Facebook</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Twitter</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Linkedin</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Tik Tok</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>UK-Based Content Creator</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Add-On Services Available</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Monthly Rolling Plan</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-[#024963]' /> <span>Email Support</span>
             </div>

             <p className="rounded-lg mt-5 bg-[#024963] text-center text-white py-3 font-bold text-[0.9rem]
          transition-transform duration-300 transform hover:scale-90 cursor-pointer">SIGN UP NOW</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className={`max-w-sm rounded-3xl overflow-hidden mx-2 my-2 bg-[#024963] text-white transition-transform duration-1000 transform ${isVisible ? 'translate-x-0' : 'translate-x-[150%]'}`}>
        <div className="px-12 py-10">
        <div className='text-center '>
        <h2 className='text-1xl md:text-5xl font-bold mb-5 text-white'>Affordable</h2>
        <h5 className='text-1xl md:text-2xl font-bold mb-5 text-white'>£49/month</h5>
        <p  className='text-lg pb-4'>For startups on a tight budget.</p>
        </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>High-Quality Visuals</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>2 Posts Per Week</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Captions & Hashtags</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Scheduling & Posting</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Facebook</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Instagram</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Twitter</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Linkedin</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Tik Tok</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>UK-Based Content Creator</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Add-On Services Available</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Monthly Rolling Plan</span>
             </div>
          <div className="flex text-lg my-2 items-center">
            <FaRegCheckCircle className='mr-2 text-white' /> <span>Email Support</span>
             </div>

             <p className="rounded-lg mt-5 bg-white text-center text-black py-3 font-bold text-[0.9rem]
          transition-transform duration-300 transform hover:scale-90 cursor-pointer">SIGN UP NOW</p>
        </div>
      </div>
    </div>
    </>
  )
}
