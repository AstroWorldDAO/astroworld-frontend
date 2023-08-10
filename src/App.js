import React, { useRef } from "react";
import Hero from "./components/Hero";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import { Toaster } from "react-hot-toast";

function App() {
  const ecosystem = useRef(null);
  return (
    <>
    <Toaster />
    <Hero ecosystem={ecosystem}/>
    <Part1 ref={ecosystem}/>
    <div className="sm:mt-auto sm:mb-0 mt-[200px]">
      <p className='font-inter capitalize text-[80px] sm:text-[100px] text-transparent w-[300px] md:w-[750px] lg:w-[1000px] leading-[110px] text-center opacity-100 font-bold bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#B5B5B5] mx-auto'>The Future Begins Here</p>
    </div>
    <Part2 />
    <Part3 />
    </>
  );
}

export default App;
