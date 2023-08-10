import  {forwardRef, useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import {FaExternalLinkSquareAlt} from "react-icons/fa";
import swap from "../images/swap.png"
import nft from "../images/nft.png"
import verse from "../images/verse.png"

const Section2 = (props,ref) => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const ref2 = useRef(null)
  const isInView = useInView(ref2, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
    }
  }, [isInView , mainControls])

  return (
    <div className='flex w-[330px] sm:w-[550px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] mx-auto font-dmsans justify-between flex-col items-center gap-10 mt-[200px] md:mt-[400px] lg:mt-[600px] text-white' ref={ref} >
      <p className='text-[48px] sm:text-[64px] font-black font-inter leading-[60px] sm:leading-[85px] w-[300px] sm:w-[500px] md:w-[750px] text-center mx-auto bg-gradient-to-bl sm:bg-gradient-to-br from-[#6935ff] to-[#ffffff] bg-clip-text text-transparent'>Our Ecosystem</p>
      <p className='text-[26px] font-light text-[#b3b3b3] my-auto w-[290px] sm:w-[400px] md:w-[600px] lg:w-[800px] text-center'>Groundbreaking crypto ecosystem powered by opBNB, merging DeFi, Metaverse, and NFTs for limitless possibilities.</p>
      <div className='flex md:flex-row flex-col w-[300px] sm:w-[550px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] justify-between font-dmsans mt-10 gap-10 md:gap-0 items-center md:items-start' ref={ref2}>
        <motion.div className='hover:text-[#6935ff] h-[330px] md:h-[340px] xl:h-[310px] w-[300px] md:w-[230px] lg:w-[320px] xl:w-[370px] bg-[#101010] rounded-[7px] flex flex-col pt-[25px] pl-8 md:pl-6 lg:pl-8 hover:bg-[#202020] duration-200 ease-in-out select-none cursor-pointer'
        onClick={() => openInNewTab("https://swap.astroworld.app")}
        variants={{
          hidden: {opacity: 0, y: 0},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className='flex'>
            <img src={swap} alt="" className='w-[75px] md:w-[50px] lg:w-[75px]'/>
            <div className='ml-auto mr-8 mt-3'>
              <FaExternalLinkSquareAlt size={25}/>
            </div>
          </div>
          <p className='font-inter text-[32px] font-bold mt-5'>AstroSwap</p>
          <p className='text-[20px] font-light text-[#b3b3b3] mt-2 w-[250px] md:w-[180px] lg:w-[270px] xl:w-[300px]'>Discover the future of DeFi on opBNB, where swapping and liquidity pools redefine finance.</p>
        </motion.div>
        <motion.div className='hover:text-[#6935ff] h-[330px] md:h-[340px] xl:h-[310px] w-[300px] md:w-[230px] lg:w-[320px] xl:w-[370px] bg-[#101010] rounded-[7px] flex flex-col pt-[28px] pl-8 md:pl-6 lg:pl-8 hover:bg-[#202020] duration-200 ease-in-out select-none cursor-pointer'
        onClick={() => openInNewTab("https://nft.astroworld.app")}
        variants={{
          hidden: {opacity: 0, y: 0},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className='flex'>
            <img src={nft} alt="" className='w-[75px] md:w-[50px] lg:w-[75px]'/>
            <div className='ml-auto mr-8 mt-3'>
              <FaExternalLinkSquareAlt size={25}/>
            </div>
          </div>
          <p className='font-inter text-[32px] font-bold mt-5'>AstroNFT</p>
          <p className='text-[20px] font-light text-[#b3b3b3] mt-2 w-[250px] md:w-[180px] lg:w-[270px] xl:w-[300px]'>Own blockchain-secured art with rare NFTs, revolutionizing the digital art scene.</p>
        </motion.div>
        <motion.div className='hover:text-[#6935ff] h-[330px] md:h-[340px] xl:h-[310px] w-[300px] md:w-[230px] lg:w-[320px] xl:w-[370px] bg-[#101010] rounded-[7px] flex flex-col pt-[28px] pl-8 md:pl-6 lg:pl-8 hover:bg-[#202020] duration-200 ease-in-out select-none cursor-pointer'
        onClick={() => openInNewTab("https://verse.astroworld.app")}
        variants={{
          hidden: {opacity: 0, y: 0},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div className='flex'>
            <img src={verse} alt="" className='w-[75px] md:w-[50px] lg:w-[75px]'/>
            <div className='ml-auto mr-8 mt-3'>
              <FaExternalLinkSquareAlt size={25}/>
            </div>
          </div>
          <p className='font-inter text-[32px] font-bold mt-5'>AstroVerse</p>
          <p className='text-[20px] font-light text-[#b3b3b3] mt-2 w-[250px] md:w-[190px] lg:w-[270px] xl:w-[300px]'>Immerse in a limitless metaverse, blending reality and virtuality for boundless creativity.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default forwardRef(Section2)