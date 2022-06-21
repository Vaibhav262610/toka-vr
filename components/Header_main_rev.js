import React from "react";

const Header_main_rev = () => {
  return (
    <>
      <div className=" ml-12 flex-col flex w-full sm:hidden md:flex-row items-center justify-between ">
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

          <div className="mt-24">
            <img
              src="/main_card.png "
              className=" animate-wiggle"
              width="500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-44">
          <div className="flex items-centergap-1">
            <img src="/discount.png" className="h-4" />
            <h3 className=" text-1xl sm:text-1xl tracking-widest ">
              GET <span className="text-[#858585]">25%</span> OFF NOW
            </h3>
          </div>
          <h1 className="mt-2 text-5xl sm:text-6xl !font-bold  ">
            Make your life
          </h1>
          <div className="flex gap-6 items-center">
            <h1 className=" text-5xl sm:text-6xl !font-bold ">easier with crypto</h1>
            <img src="/sparkle.png" className="h-12 mt-3 hidden sm:block" />
          </div>
          <button className="mt-12 w-fit text-2xl font-bold py-2 rounded-lg px-8 bg-green-400">
            Start Now
          </button>
          <div className="mt-36 ">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex items-center gap-4">
                <h1 className="text-5xl">2K+</h1>
                <h1 className=" uppercase  mt-2 text-xl text-[#858585]">
                  active members
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <h1 className="text-5xl ">20K+</h1>
                <h1 className=" uppercase mt-2 text-xl text-[#858585]">
                  wallet types
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_main_rev;
