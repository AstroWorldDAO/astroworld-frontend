import React from 'react'
import { FaTelegramPlane, FaTwitter, FaDiscord, FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

const Section4 = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
  return (
    <div className='flex w-[300px] sm:w-[500px] md:w-[750px] lg:w-[950px] xl:w-[1000px] flex-col font-dmsans text-white justify-between items-center gap-10 mt-[200px] sm:mt-[470px] xl:ml-36 mx-auto xl:mx-0'>
        <div className='flex flex-col lg:flex-row gap-6'>
            <p className='text-[48px] sm:text-[64px] font-black font-inter leading-[60px] sm:leading-[85px] text-white w-[300px] sm:w-[480px] mx-auto hover:text-[#354dff] duration-200 ease-in-out'>Exploring the Cosmic Future Together.</p>
            <p className='text-[20px] sm:text-[26px] font-light text-[#b3b3b3] my-auto w-[300px] sm:w-[480px]'>A vibrant hub of collaboration and innovation. Together, we'll explore the cosmos of decentralized finance, art, and technology, and create a brighter future for all cosmic explorers</p>
        </div>
        <div className='flex flex-col lg:grid w-[300px] sm:w-[450px] md:w-[500px] lg:w-[900px] xl:w-[1000px] grid-cols-2 justify-between gap-5'>
            <div onClick={() => openInNewTab('https://t.me/+jCnb275BISg5MDZk')} className='flex flex-col text-[#dddddd] sm:text-[#797979] hover:text-[#dddddd] duration-200 ease-in-out select-none cursor-pointer gap-5 sm:gap-0'>
                <div className='flex gap-5'>
                    <FaTelegramPlane size={32} className='text-[#354dff]'/>
                    <p className='font-inter font-bold text-white text-[24px] flex h-min'>Telegram</p>
                    <FaExternalLinkSquareAlt size={20} className='my-auto ml-auto mr-[40px] sm:mr-[80px]'/>
                </div>
                <p className='text-[18px] font-light sm:ml-14 md:w-[400px] lg:w-[300px] xl:w-[350px] sm:w-[400px]'>Cosmic discussions, updates, and camaraderie among crypto enthusiasts and visionaries.</p>
            </div>
            <div onClick={() => openInNewTab('https://discord.com/invite/jkrNGV6dt7')} className='flex flex-col text-[#dddddd] sm:text-[#797979] hover:text-[#dddddd] duration-200 ease-in-out select-none cursor-pointer gap-5 sm:gap-0'>
                <div className='flex gap-5'>
                    <FaDiscord size={32} className='text-[#354dff]'/>
                    <p className='font-inter font-bold text-white text-[24px] flex h-min'>Discord</p>
                    <FaExternalLinkSquareAlt size={20} className='my-auto ml-auto mr-[40px] sm:mr-[80px]'/>
                </div>
                <p className='text-[18px] font-light sm:ml-14 md:w-[400px] lg:w-[300px] xl:w-[350px] sm:w-[400px]'>An interactive space where crypto enthusiasts unite to explore the future of finance and technology.</p>
            </div>
            <div onClick={() => openInNewTab('https://twitter.com/AstroWorldDAO')} className='flex flex-col text-[#dddddd] sm:text-[#797979] hover:text-[#dddddd] duration-200 ease-in-out select-none cursor-pointer gap-5 sm:gap-0'>
                <div className='flex gap-5'>
                    <FaTwitter size={32} className='text-[#354dff]'/>
                    <p className='font-inter font-bold text-white text-[24px] flex h-min'>Twitter</p>
                    <FaExternalLinkSquareAlt size={20} className='my-auto ml-auto mr-[40px] sm:mr-[80px]'/>
                </div>
                <p className='text-[18px] font-light sm:ml-14 md:w-[400px] lg:w-[300px] xl:w-[350px] sm:w-[400px]'>The latest news, events, and engaging discussions within the Astroworld community - where innovation and opportunity converge!</p>
            </div>
            <div onClick={() => openInNewTab('https://github.com/AstroWorldDAO')} className='flex flex-col text-[#dddddd] sm:text-[#797979] hover:text-[#dddddd] duration-200 ease-in-out select-none cursor-pointer gap-5 sm:gap-0'>
                <div className='flex gap-5'>
                    <FaGithub size={32} className='text-[#354dff]'/>
                    <p className='font-inter font-bold text-white text-[24px] flex h-min'>Github</p>
                    <FaExternalLinkSquareAlt size={20} className='my-auto ml-auto mr-[40px] sm:mr-[80px]'/>
                </div>
                <p className='text-[18px] font-light sm:ml-14 md:w-[400px] lg:w-[300px] xl:w-[350px] sm:w-[400px]'>Discover Astroworld's thriving GitHub community, where developers collaborate to build the future of decentralized finance, art, and technology.</p>
            </div>
      </div>
    </div>
  )
}

export default Section4