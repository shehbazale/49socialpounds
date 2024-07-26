import React from 'react'

function Working() {
  return (
<>
    <div className='bg-[#024963] py-[60px] w-full'>
   <div  className='text-center'>
     <h1 className='text-white text-[5.5vw] font-bold'>How Does It Work?</h1>
        <p className='text-white text-[2.6vw]'>Dive In Today—It's A Piece Of Cake.</p>
    </div> 
        {/* heading section end */}
    {/* <div className="flex flex-wrap py-[80px] items-center justify-center md:px-12 md:flex-row">
    
    <div className="lg:w-1/4 mt-[10px]">
    <h1 className='w-2 text-center text-[#f7b141] text-[8vw] font-bold'>1skdjaskldja</h1>
    </div>
   
    </div> */}
    {/* <div className='flex flex-wrap gap-16 mx-20 my-20'>
    <div className="bg-[blue] w-1/4 overflow-hidden">
        <p className='text-[#f7b141] text-[8vw] font-bold text-center'>1askdjaskdasdask</p>
    </div>
    <div className="bg-[red] flex-auto w-32">
        <p>helo  every one</p>
    </div>
    <div className="bg-[green] flex-1 w-32">
        <p>helo  every one</p>
    </div>
    </div> */}
  <div className="px-6"> {/* Added padding on left and right sides */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4"> {/* Added responsive classes */}
        <div className="w-full md:w-1/3 p-4 mb-4 md:mb-0"> {/* Added responsive classes */}
          <p className="text-[#f7b141] text-[8vw] font-bold text-center">1</p>
          <h3 className='w-[70%] text-[2vw] font-bold text-white'>CHOOSE YOUR DESIRED PLAN</h3>
          <p className="w-[79%] text-center text-[#ccd6df] text-[1.4vw]">Pick the package that suits you best.
           Add any extras you fancy.</p>
        </div>
        <div className="w-full md:w-1/3 p-4 mb-4 md:mb-0"> {/* Added responsive classes */}
        <p className="text-[#f7b141] text-[8vw] font-bold text-center">2</p>
          <h3 className='w-[70%] text-[2vw] font-bold text-white'>COMPLETE INTAKE FORM</h3>
          <p className="w-[79%] text-center text-[#ccd6df] text-[1.4vw]">Fill out the questionnaire about your brand and target audience.</p>
        </div>
        <div className="w-full md:w-1/3 p-4 "> {/* Added responsive classes */}
        <p className="text-[#f7b141] text-[8vw] font-bold text-center">3</p>
          <h3 className='w-[70%] text-[2vw] font-bold text-white'>GET ON-BRAND CONTENT</h3>
          <p className="w-[79%] text-center text-[#ccd6df] text-[1.4vw]">Get top-notch posts within 7 working days.</p>
        </div>
      </div>
    </div>
       </div>
        
       
</>
  )
}

export default Working