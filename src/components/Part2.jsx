import React from "react"
import bg from "../images/bg3.png"
import Section3 from "./Section3"
import Section4 from "./Section4"

const Part2 = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-right sm:bg-center w-screen h-auto lg:h-[2160px] sm:mt-[250px]'>
      <Section3 />
      <Section4 />
    </div>
  )
}

export default Part2