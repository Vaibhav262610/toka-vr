import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col ml-6 sm:ml-0  md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col mt-44">
          <div className="flex items-center gap-1">
            <img src="/discount.png" className="h-4" />
            <h3 className=" text-1xl sm:text-3xl">
              GET <span className="text-[#858585]">25%</span> OFF NOW
            </h3>
          </div>
          <h1 className="mt-2 text-5xl sm:text-6xl !font-medium  ">
            Make your life
          </h1>
          <div className="flex gap-6 items-center">
            <h1 className=" text-5xl sm:text-6xl !font-medium ">easier with</h1>
            <img src="/sparkle.png" className="h-12 mt-3 hidden sm:block" />
          </div>
          <h1 className=" text-5xl sm:text-6xl !font-medium">crypto</h1>
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
      <div className="flex justify-center ">
        <hr className=" mt-24 w-8/12 border-gray-600 " />
      </div>

      <nav className="relative flex justify-center ">
        <div className="mt-20  flex px-10 sm:px-20  whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide md:w-6/12 w-10/12 ">
          <img src="/pic1.png" className="h-4" />
          <img src="/pic2.png" className="h-4" />
          <img src="/pic3.png" className="h-5" />
          <img src="/pic4.png" className="h-4" />
          <img src="/pic5.png" className="h-6" />
          <img src="/pic1.png" className="h-4" />
          <img src="/pic2.png" className="h-4" />
          <img src="/pic3.png" className="h-5" />
          <img src="/pic4.png" className="h-4" />
          <img src="/pic2.png" className="h-4" />
          <img src="/pic3.png" className="h-5" />
          <img src="/pic4.png" className="h-4" />
          <img src="/pic5.png" className="h-6" />
          <img src="/pic1.png" className="h-4" />
          <img src="/pic2.png" className="h-4" />
          <img src="/pic3.png" className="h-5" />
          <img src="/pic4.png" className="h-4" />
          <img src="/pic5.png" className="h-6" />
        </div>
      </nav>

      <div>
        <div className="flex flex-col justify-center items-center mt-44">
          <h2 className=" text-[#28ac98]">BUY, STORE, SELL</h2>
          <h1 className="mt-4 text-4xl">Manage your transactions</h1>
          <h1 className="mt-2 text-4xl">in one place</h1>
          <p className="mt-6 text-gray-500">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat
          </p>
          <p className="mt-4 text-gray-500">
            currencies using bank transfers on your credit or debit card
          </p>
          <img src="/Transactions.png " className="w-8/12 mt-16" />
        </div>
      </div>

      <div className="mt-32 gap-44 flex-col md:flex-row flex justify-center items-center">
        <div>
          <h3 className="text-[#28ac98] ">EARN CRYPTO</h3>
          <div className="mt-4 flex items-center gap-5">
            <h1 className="text-4xl">Deposit crypto earn </h1>
            <img src="/sparkle.png" className="h-8 mt-1" />
          </div>
          <h1 className="text-4xl">intrest </h1>
          <p className=" mt-4 text-gray-400">
            Choose from 150+ cryptocurrencies
          </p>
          <div className="mt-6 flex items-center gap-5  ">
            <h1>
              <span className=" text-4xl text-[#28ac98] ">15%</span> <br />
              On cryptos
            </h1>
            <h1>
              <span className=" text-4xl text-[#28ac98] ">40%</span>
              <br />
              On stablecoins
            </h1>
          </div>
        </div>
        <img className="md:w-4/12 w-9/12" src="/img1.png " />
      </div>

      <div className="flex flex-col md:flex-row gap-0 md:gap-32  mt-16 justify-center items-center">
        <div className="flex  flex-col">
          <h2 className="text-[#28ac98]">BENEFITS</h2>
          <div className="mt-4 flex items-center gap-5">
            <h1 className="text-4xl">Make crypto work </h1>
            <img src="/sparkle.png" className="h-8 mt-1" />
          </div>
          <h1 className="text-4xl">harder on you</h1>
          <img src="/img2.png" className="" />
        </div>
        <div className="mt-32 ">
          <p className="text-gray-400 ">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat
          </p>
          <p className="mt-2 text-gray-400 ">
            currencies using bank transfers on your credit or debit card
          </p>
          <br />
          <br />
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-t to-gray-900 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/star.png" className="h-10" />
                <h1 className="text-4xl text-[#28ac98] ">Best prices</h1>
              </div>
              <p className="text-gray-400 mt-4 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-gray-400   ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="bg-gradient-to-t to-gray-900 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/star.png" className="h-10" />
                <h1 className="text-4xl text-[#28ac98] ">Best prices</h1>
              </div>
              <p className="text-gray-400 mt-4 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-gray-400   ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="bg-gradient-to-t to-gray-900 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/star.png" className="h-10" />
                <h1 className="text-4xl text-[#28ac98] ">Best prices</h1>
              </div>
              <p className="text-gray-400 mt-4 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-gray-400  ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
