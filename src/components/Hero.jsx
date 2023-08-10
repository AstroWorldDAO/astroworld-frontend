import React, {useRef, useEffect, useState} from 'react'
import bg from "../images/bg.png"
import { motion, useInView, useAnimation } from "framer-motion"
import logo from "../images/logo-white.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Hero = ({ecosystem}) => {

  const [popup, setPopup] = useState(false)
  const [popup2, setPopup2] = useState(false)

  const [nav, setNav] = useState(false)

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView , mainControls])

  const ecosystemHandle = () => {
    ecosystem.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleNav = () => {
    setNav(!nav)
  }
  
  const handleEnter = () => {
    setPopup(!popup)
  }

  const handleEnter2 = () => {
    setPopup2(!popup2)
  }

  const handleLeave = () => {
    setPopup(!popup)
  }

  const handleLeave2 = () => {
    setPopup2(!popup2)
  }

  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-center h-screen sm:h-auto md:h-screen flex flex-col text-white w-screen'>
      <div className='flex flex-row lg:flex-col items-center gap-[25px] mx-auto mt-[40px] z-10 w-[300px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] justify-between'>
        <div className='flex flex-row lg:flex-col items-center gap-3'>
          <img src={logo} alt="" className='w-[29px] h-[32px] sm:w-[37px] sm:h-[41px]'/>
          <p className='font-inter font-bold text-[22px] tracking-[1px] text-[#dddddd]'>ASTROWORLD</p>
        </div>
        <div onClick={handleNav} className='block lg:hidden'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
        </div>
        <div className='gap-5 lg:flex hidden'>
          <p onClick={() => openInNewTab("https://astrokitty.gitbook.io/docs/")} className='font-dmsans text-[17px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>Documents</p>
          <div className='flex flex-col'> 
            <p onMouseEnter={handleEnter} className={popup ? 'font-dmsans text-[17px] tracking-[1px] text-[#dddddd] cursor-pointer select-none' : ' font-dmsans text-[17px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'}>Apps</p>
            <div onMouseLeave={handleLeave} className={!popup ? 'absolute h-[130px] w-[100px] bg-transparent flex -ml-7 rounded-[10px] duration-500 ease-in-out -z-10':' absolute h-[130px] w-[100px] bg-transparent flex -ml-7 rounded-[10px] duration-100 ease-in-out z-10'}>
              <div className={popup ? 'mt-[30px] h-[100px] w-[100px] bg-[#101010] flex flex-col items-center justify-center rounded-[10px] duration-500 ease-in-out': 'mt-5 opacity-0 h-[100px] w-[100px] bg-[#101010] flex flex-col items-center justify-center rounded-[10px] duration-500 ease-in-out'}>
                <p onClick={() => openInNewTab("https://swap.astroworld.app")} className='font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>AstroSwap</p>
                <p onClick={() => openInNewTab("https://nft.astroworld.app")} className='my-1 font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>AstroNFT</p>
                <p onClick={() => openInNewTab("https://verse.astroworld.app")} className='font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>AstroVerse</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'> 
            <p onMouseEnter={handleEnter2} className={popup2 ? 'font-dmsans text-[17px] tracking-[1px] text-[#dddddd] cursor-pointer select-none' : ' font-dmsans text-[17px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'}>Community</p>
            <div onMouseLeave={handleLeave2} className={!popup2 ? 'absolute h-[130px] w-[90px] bg-transparent flex ml-1 rounded-[10px] duration-500 ease-in-out -z-10':' absolute h-[130px] w-[90px] bg-transparent flex ml-1 rounded-[10px] duration-100 ease-in-out z-10'}>
              <div className={popup2 ? 'mt-[30px] h-[100px] w-[90px] bg-[#101010] flex flex-col items-center justify-center rounded-[10px] duration-500 ease-in-out': 'mt-5 opacity-0 h-[100px] w-[90px] bg-[#101010] flex flex-col items-center justify-center rounded-[10px] duration-500 ease-in-out'}>
                <p onClick={() => openInNewTab('https://twitter.com/AstroWorldDAO')} className='font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>Twitter</p>
                <p onClick={() => openInNewTab('https://discord.com/invite/jkrNGV6dt7')} className='my-1 font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>Discord</p>
                <p onClick={() => openInNewTab('https://t.me/+jCnb275BISg5MDZk')} className='font-dmsans text-[14px] tracking-[1px] text-[#b3b3b3] hover:text-[#dddddd] cursor-pointer select-none'>Telegram</p>
              </div>
            </div>
          </div>
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 lg:hidden z-50' : 'z-50 fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 lg:hidden'}>
            <h1 className='w-full text-2xl font-bold mx-4 mt-8'>ASTROWORLD</h1>
            <ul className='px-3 pt-6'>
                <li onClick={() => {openInNewTab('https://astrokitty.gitbook.io/docs/')}} className='p-4 font-dmsans cursor-pointer hover:text-[#7000FF]'>Documents</li>
                <li onClick={() => openInNewTab("https://swap.astroworld.app")} className='p-4 font-dmsans cursor-pointer hover:text-[#7000FF]'>AstroSwap</li>
                <li onClick={() => openInNewTab("https://nft.astroworld.app")} className='p-4 font-dmsans cursor-pointer hover:text-[#7000FF]'>AstroNFT</li>
                <li onClick={() => openInNewTab("https://verse.astroworld.app")} className='p-4 font-dmsans cursor-pointer hover:text-[#7000FF]'>AstroVerse</li>
            </ul>
        </div>
      </div>
      <div ref={ref} className='flex items-center justify-center flex-col gap-[15px] w-min h-min mx-auto mt-[50px] sm:mt-[120px]'>
        <motion.p className='font-inter capitalize text-[50px] md:text-[80px] lg:text-[100px] text-transparent w-[330px] sm:w-[550px] md:w-[750px] lg:w-[1000px] leading-[60px] md:leading-[90px] lg:leading-[110px] text-center opacity-100 font-black bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#B5B5B5]' 
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >The First Ecosytem Of The New Era</motion.p>
        <motion.p className='font-dmsans font-regular text-[18px] tracking-[1px] leading-[30px] mt-[20px] text-center w-[300px] sm:w-[400px] md:w-[550px] lg:w-[660px] font-extralight opacity-80'
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.35 }}
        >The first Ecosystem with DeFi,NFT and Metaverse built on the opBNB network. We build the future.</motion.p>
        <motion.button onClick={ecosystemHandle} className='w-[190px] sm:w-[200px] rounded-[8px] bg-[#7000FF] hover:bg-[#5610b3] h-[51px] mt-[20px] duration-200 ease-in-out'
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.35 }}
        >
            <p className='font-dmsans text-[17px] tracking-[1px] w-max mx-auto'>Go to our Ecosystem</p>
        </motion.button>
      </div>
    </div>
  )
}

export default Hero