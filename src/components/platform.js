import React from 'react'

export default function Platform() {
  return (
    <>
    <div className='py-[50px]'>
        <div>
            <h1 className='text-center text-[3.3vw] font-bold'>Platforms We Use To Drive Client Success.</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center py-[25px]'>
        <img className="h-16 cursor-pointer" src="../assets/asset 9.webp" alt="logo"></img>
        <img className="h-12 cursor-pointer mt-4" src="../assets/asset 8.webp" alt="logo"></img>
        <img className="h-16 cursor-pointer mt-4" src="../assets/asset 7.webp" alt="logo"></img>
        <img className="h-16 cursor-pointer mt-4" src="../assets/asset 6.webp" alt="logo"></img>
        <img className="h-8 cursor-pointer mt-4" src="../assets/asset 10.webp" alt="logo"></img>
        </div>
    </div>
    </>
  )
}
