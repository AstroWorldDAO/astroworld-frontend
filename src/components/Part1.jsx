import React, { forwardRef } from "react"
import bg from "../images/bg2.png"
import Section1 from './Section1'
import Section2 from './Section2'

const Part1 = (props, ref) => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-left sm:bg-center w-screen h-auto md:h-[2160px] mt-[100px] sm:mt-[250px] flex flex-col'>
      <Section1 />
      <Section2 ref={ref}/>
    </div>
  )
}

export default forwardRef(Part1)