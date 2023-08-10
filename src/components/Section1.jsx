import React from "react"

const Section1 = () => {

  return (
    <div className='flex w-[330px] sm:w-[550px] md:w-[750px] lg:w-[1000px] mx-auto font-dmsans text-white justify-between flex-col items-center gap-10'>
      <p className='text-[42px] sm:text-[52px] md:text-[62px] lg:text-[64px] font-black font-inter leading-[60px] sm:leading-[85px] text-white w-[330px] sm:w-[400px] md:w-[600px] lg:w-[750px] text-center mx-auto'>Exploring the Boundless Ecosystem</p>
      <p className='text-[22px] md:text-[26px] font-light text-[#b3b3b3] my-auto w-[300px] sm:w-[400px] md:w-[660px] lg:w-[800px] text-center'>Welcome to AstroWorld, an opBNB-powered crypto ecosystem. Discover DeFi, Metaverse, and NFTs, all in one celestial playground. Embrace safety, speed, and innovation as you embark on a journey to financial freedom. Join us in shaping the future of finance with AstroWorld!</p>
      <div className='flex w-[330px] sm:w-[550px] md:w-[650px] lg:w-[800px] md:justify-between md:flex-row flex-col items-center md:items-start gap-5 md:gap-0'>
        <div className='flex flex-col items-center md:items-start'>
          <p className='font-dmsans font-bold text-[90px] flex h-min'>0<p className='font-inter font-bold text-[60px] h-min mb-3 mt-auto'>+</p></p>
          <p className='text-[16px] font-light text-[#b3b3b3] -mt-5 ml-1 w-max'>Transactions in AstroSwap.</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p className='font-dmsans font-bold text-[90px] flex h-min'>$0<p className='font-inter font-bold text-[60px] h-min mb-3 mt-auto'>+</p></p>
          <p className='text-[16px] font-light text-[#b3b3b3] -mt-5 ml-1 w-max'>AstroNFT's total worth.</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p className='font-dmsans font-bold text-[90px] flex h-min'>0h<p className='font-inter font-bold text-[60px] h-min mb-3 mt-auto'>+</p></p>
          <p className='text-[16px] font-light text-[#b3b3b3] -mt-5 ml-1 w-max'>AstroVerse's played time.</p>
        </div>
      </div>
    </div>
  )
}

export default Section1