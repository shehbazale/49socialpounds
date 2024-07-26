import React from 'react'

export default function Review() {
  return (
    <>
    <div className='bg-[#024963] py-[50px] '>
        <div className='flex flex-col md:flex-row md:justify-between mx-16 gap-32'>
       {/* left div */}
        <div className="w-1/3 mt-32">
            <p className='text-[#f7b141] text-[1.3rem] mb-4'>What Some Of Our Clients Say.......</p>
            <h1 className='leading-tight w-[71%] text-white text-[3.5rem] font-extrabold'>Don’t Just Take Our Word For It</h1>
        </div>
        {/* right div */}
      <div className="w-2/3">
        <div className='flex flex-col flex-wrap md:flex-row md:justify-center gap-1'>
            {/* first div */}
        <div className='w-[100%] md:w-[45%] p-4 mb-8 text-center'>
        <div className="text-yellow-500 text-4xl mb-8">
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
      </div>
       <p className='text-[#cfcfcf] text-[1.1rem] leading-tight'>"Been with 49 Pound Social for 2 years now. First, they set up our website, then handled our socials. Now, they're onto SEO and blogs. Great team to work with, I highly recommend using them for budget and quality."</p>
        <h1 className='text-center text-[#f7b141] text-[1.2rem] mt-4 leading-tight'><span className=' text-[1.6rem] font-extrabold leading-tight'>MICK ELLIS</span><br/>Taxi Company Owner</h1>
        </div>
        {/* second div */}
        <div className='w-[100%] md:w-[45%] p-4 mb-8 text-center'>
        <div className="text-yellow-500 text-4xl mb-8">
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
      </div>
       <p className='text-[#cfcfcf] text-[1.1rem] leading-tight'>"Thanks to 49, our beauty academy's online presence has soared! From building our stunning website to expertly managing social media and meta ads, they've been instrumental in our success. Couldn't be happier!"</p>
        <h1 className='text-center text-[#f7b141] text-[1.2rem] mt-4 leading-tight'><span className=' text-[1.6rem] font-extrabold leading-tight'>DANIELLE DOWNES</span><br/>Beauty Academy owner</h1>
        </div>
           {/* third div */}
           <div className='w-[100%] md:w-[45%] p-4 mb-8 text-center'>
        <div className="text-yellow-500 text-4xl mb-8">
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
      </div>
       <p className='text-[#cfcfcf] text-[1.1rem] leading-tight'>"Super happy with the social media management and website they set up for our cleaning business! Quick responses, awesome ideas, and they nailed our style. Our online presence is top-notch now. Definitely recommend!"</p>
        <h1 className='text-center text-[#f7b141] text-[1.2rem] mt-4 leading-tight'><span className=' text-[1.6rem] font-extrabold leading-tight'>WALTER FIELDS</span><br/>Student</h1>
        </div>
        {/* fourth div */}
        <div className='w-[100%] md:w-[45%] p-4 mb-8 text-center'>
        <div className="text-yellow-500 text-4xl mb-8">
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
        <span className="inline">&#9733;</span>
      </div>
       <p className='text-[#cfcfcf] text-[1.1rem] leading-tight'>"Big shoutout for their outstanding work! They not only created an amazing website for our valeting business but also handled all our social media management and facebook ads. Their expertise has been invaluable."</p>
        <h1 className='text-center text-[#f7b141] text-[1.2rem] mt-4 leading-tight'><span className=' text-[1.6rem] font-extrabold leading-tight'>EDDIE</span><br/>Car Valet Owner</h1>
        </div>


        </div>
      </div>
        </div>
    </div>
    </>
  )
}
