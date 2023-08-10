import React from "react"
import bg from "../images/bg4.png"
import Footer from "./Footer"

const Part3 = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-center w-screen sm:h-[1080px] h-auto mt-[50px]'>
      <Footer />
    </div>
  )
}

export default Part3