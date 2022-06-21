import React from 'react'

const Header_main = () => {
  return (
    <>
    <div className=" flex-col ml-6 sm:ml-0 hidden sm:flex    md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col mt-44">
          <div className="flex items-center gap-1">
            <img src="/discount.png" className="h-4" />
            <h3 className=" text-1xl sm:text-1xl ">
              GET <span className="text-[#858585]">25%</span> OFF NOW
            </h3>
          </div>
          <h1 className="mt-2 text-5xl sm:text-6xl !font-bold  ">
            Make your life
          </h1>
          <div className="flex gap-6 items-center">
            <h1 className=" text-5xl sm:text-6xl !font-bold ">easier with</h1>
            <img src="/sparkle.png" className="h-12 mt-3 hidden sm:block" />
          </div>
          <h1 className=" text-5xl sm:text-6xl !font-bold">crypto</h1>
          <button className="mt-12 w-fit font-bold py-2 rounded-lg px-8 bg-green-400">
            Start Now
          </button>
          <div className="mt-20 ">
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">2K+</h1>
                <h1 className=" uppercase font-extrabold mt-2 text-xs text-[#858585]">
                  active members
                </h1>
              </div>
              <hr className="w-10  border-white transform rotate-90 " />
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">20K+</h1>
                <h1 className=" uppercase font-extrabold mt-2 text-xs text-[#858585]">
                  wallet types
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/bubble1.png"
            className="absolute mt-12 ml-32 hidden md:block "
            width="45"
          />
          <img
            src="/bubble2.png"
            className="absolute  mt-12 ml-80 left-28 hidden md:block "
            width="35"
          />
          <img
            src="/bubble1.png"
            className="absolute mt-72 ml-80 left-56   hidden md:block"
            width="45"
          />

          <div className="pl-10  ">
            <img
              src="/main_card.png "
              className=" animate-wiggle"
              width="500"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header_main