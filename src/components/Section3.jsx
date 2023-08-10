import React from 'react'
import { HiLockOpen } from "react-icons/hi";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { PiHandCoinsDuotone } from "react-icons/pi";

const Section3 = () => {
  return (
    <div className='flex'>
        <div className='w-[300px] md:w-[760px] lg:w-[1000px] xl:w-[1100px] mt-[245px] flex mx-auto xl:mr-20 xl:ml-auto'>
            <div className='flex md:flex-row flex-col lg:gap-10 gap-10 md:gap-5 w-full lg:ml-2 xl:ml-0'>
                <div className='flex flex-col gap-14 items-center sm:items-start'>
                    <p className='text-[48px] sm:text-[64px] font-black font-inter leading-[70px] sm:leading-[85px] h-min text-white w-min hover:text-[#ff3535] duration-200 ease-in-out text-center sm:text-left'>Galactic Advantages</p>
                    <div className='bg-[#101010] h-[410px] md:h-[330px] lg:h-[290px] w-[290px] md:w-[350px] lg:w-[470px] xl:w-[490px] rounded-[16px] flex flex-col p-5 pt-7 hover:bg-[#202020] duration-200 ease-in-out text-[#b3b3b3] hover:text-[#dddddd]'>
                        <HiLockOpen size={60} className='text-[#ff3535] ml-1'/>
                        <p className='font-inter text-[24px] font-bold mt-5 text-white'>Trust in Astroworld's Security</p>
                        <p className='text-[20px] font-light mt-2 w-[250px] md:w-[320px] lg:w-[450px]'>With robust security measures and audited smart contracts, Astroworld prioritizes your safety, ensuring your assets and data remain protected.</p>
                    </div>
                    <div className='bg-[#101010] h-[410px] md:h-[330px] lg:h-[290px] w-[290px] md:w-[350px] lg:w-[470px] xl:w-[490px] rounded-[16px] flex flex-col p-5 pt-7 hover:bg-[#202020] duration-200 ease-in-out text-[#b3b3b3] hover:text-[#dddddd]'>
                        <HiRocketLaunch size={60} className='text-[#ff3535] ml-1'/>
                        <p className='font-inter text-[24px] font-bold mt-5 text-white'>Instant Transactions</p>
                        <p className='text-[20px] font-light mt-2 w-[250px] md:w-[320px] lg:w-[450px]'>Powered by opBNB, Astroworld delivers lightning-fast transaction speeds, enabling seamless interactions and swift confirmations.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-14 items-center sm:items-start'>
                    <div className='bg-[#101010] h-[410px] md:h-[330px] lg:h-[290px] w-[290px] md:w-[350px] lg:w-[470px] xl:w-[490px] rounded-[16px] flex flex-col p-5 pt-7 hover:bg-[#202020] duration-200 ease-in-out text-[#b3b3b3] hover:text-[#dddddd]'>
                        <FaHouseChimneyUser size={60} className='text-[#ff3535] ml-1'/>
                        <p className='font-inter text-[24px] font-bold mt-5 text-white'>User-Friendly Universe</p>
                        <p className='text-[20px] font-light mt-2 w-[250px] md:w-[320px] lg:w-[450px]'>Astroworld's intuitive interface welcomes all cosmic explorers, providing easy navigation through DeFi, metaverse, and NFT activities.</p>
                    </div>
                    <div className='bg-[#101010] h-[410px] md:h-[330px] lg:h-[290px] w-[290px] md:w-[350px] lg:w-[470px] xl:w-[490px] rounded-[16px] flex flex-col p-5 pt-7 hover:bg-[#202020] duration-200 ease-in-out text-[#b3b3b3] hover:text-[#dddddd]'>
                        <PiHandCoinsDuotone size={60} className='text-[#ff3535] ml-1'/>
                        <p className='font-inter text-[24px] font-bold mt-5 text-white'>The opBNB Advantage</p>
                        <p className='text-[20px] font-light mt-2 w-[250px] md:w-[320px] lg:w-[450px]'>As part of opBNB network, Astroworld offers lower fees, interoperability, and access to a thriving ecosystem of projects and communities. Embrace limitless possibilities!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3