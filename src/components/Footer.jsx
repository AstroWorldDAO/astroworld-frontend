import React from "react"
import { toast } from "react-hot-toast"

const Footer = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const mailButton = () => {
        navigator.clipboard.writeText("support@astroworld.app")
        toast.success('Copied to clipboard.',
        {
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        }
        );
    }

  return (
    <div className="h-[1300px] sm:h-[1000px] w-screen flex">
        <div className="mt-[500px] sm:mt-auto sm:mb-0 mx-auto w-[300px] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
            <div className="mb-[20px]">
                <p className='w-full text-xl font-bold font-inter text-white'>ASTROWORLD</p>
                <p className='text-[20px] font-light text-[#b3b3b3] mt-2 hover:text-[#dddddd] duration-200 ease-in-out'>Unleash the limitless potential of finance, art, and technology in Astroworld. Embark on an extraordinary cosmic journey and explore decentralized finance, cutting-edge NFT artistry, and an immersive metaverse. Invest in a visionary universe that holds the key to the future of innovation and prosperity.</p>
            </div>
            <div className='w-[300px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] text-white'>
                <div className='grid sm:flex grid-flow-col grid-rows-2 justify-between'>
                    <div>
                        <p className='font-inter text-[26px] font-bold mt-5'>Info</p>
                        <ul className='pt-3'>
                            <li onClick={() => openInNewTab('https://astroworld.app')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Home</li>
                            <li onClick={() => openInNewTab('https://astrokitty.gitbook.io/docs/')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Documents</li>
                            <li onClick={() => openInNewTab('https://opbnb.bnbchain.org/en')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>opBNB</li>
                            <li onClick={() => openInNewTab('https://github.com/AstroWorldDAO')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Github</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-inter text-[26px] font-bold mt-5'>Ecosystem</p>
                        <ul className='pt-3'>
                            <li onClick={() => openInNewTab('https://swap.astroworld.app')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>AstroSwap</li>
                            <li onClick={() => openInNewTab('https://nft.astroworld.app')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>AstroNFT</li>
                            <li onClick={() => openInNewTab('https://verse.astroworld.app')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>AstroVerse</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-inter text-[26px] font-bold mt-5'>Documents</p>
                        <ul className='pt-3'>
                            <li onClick={() => openInNewTab('https://astrokitty.gitbook.io/docs/astroworld/astroswap')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>DeFi</li>
                            <li onClick={() => openInNewTab('https://astrokitty.gitbook.io/docs/astroworld/astronft')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>NFT</li>
                            <li onClick={() => openInNewTab('https://astrokitty.gitbook.io/docs/astroworld/astroverse')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Metaverse</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-inter text-[26px] font-bold mt-5'>Contact</p>
                        <ul className='pt-3'>
                            <li onClick={mailButton} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Email</li>
                            <li onClick={() => openInNewTab('https://twitter.com/AstroWorldDAO')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Twitter</li>
                            <li onClick={() => openInNewTab('https://discord.com/invite/jkrNGV6dt7')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Discord</li>
                            <li onClick={() => openInNewTab('https://t.me/+jCnb275BISg5MDZk')} className='text-[20px] font-light text-[#b3b3b3] ml-1 w-max cursor-pointer hover:text-[#dddddd]'>Telegram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer