import React from "react";
import Header_main from "./Header_main";
import Header_main_rev from "./Header_main_rev";

const Header = () => {
  return (
    <>
      <Header_main />
      <Header_main_rev />
      <div className="flex sm:hidden justify-center ">
        <hr className=" mt-24  sm:w-8/12 border-gray-600 " />
      </div>

      <nav className="relative flex justify-center ">
        <div className="mt-20  flex px-10 sm:px-20  whitespace-nowrap space-x-10 sm:space-x-20  overflow-x-scroll scrollbar-hide md:w-6/12 sm:10/12 w-10/12 ">
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
          <p className="mt-6 text-gray-500 tracking-wide">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat
          </p>
          <p className="mt-4 text-gray-500 tracking-wide">
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
          <p className="text-gray-400 tracking-widest ">
            You can buy and sell 150+ cryptocurrencies with 20+ fiat
          </p>
          <p className="mt-2 text-gray-400 tracking-widest ">
            currencies using bank transfers on your credit or debit card
          </p>
          <br />
          <br />
          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-t to-gray-700 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/star.png" className="h-10" />
                <h1 className="text-3xl text-[#28ac98] ">Best prices</h1>
              </div>
              <p className="text-[13px] text-gray-400 mt-2 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-[13px] text-gray-400  pb-4  ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="hover:bg-gradient-to-t to-gray-700 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/lock.png" className="h-10" />
                <h1 className="text-3xl text-[#28ac98] ">Secure & insured</h1>
              </div>
              <p className="text-[13px] text-gray-400 mt-2 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-[13px] text-gray-400 pb-4  ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="hover:bg-gradient-to-t to-gray-700 from-[#020710] rounded-2xl py-1 px-4">
              <div className=" mt-8 gap-4 flex items-center">
                <img src="/trading.png" className="h-10" />
                <h1 className="text-3xl text-[#28ac98] ">No trading fees</h1>
              </div>
              <p className="text-[13px] text-gray-400 mt-2 ml-14 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              </p>
              <p className="text-[13px] text-gray-400 pb-4  ml-14 ">
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-64">
      <div className="flex justify-between px-32 py-16 w-8/12 rounded-2xl border bg-[#13171E]">
        <div>
          <h1 className="text-4xl">Let’s start your crypto</h1>
          <div className="flex items-center gap-5">
            <h1 className="text-4xl">
              <span className="text-[#28ac98]">investment</span> now
            </h1>
            <img src="/sparkle.png " className="h-8" />
          </div>
          <p className="mt-10 text-gray-400 tracking-wide">
            Choose from 150+ cryptocurrencies
          </p>
        </div>
        <div>
          <button className="mt-12 w-fit font-bold py-2 rounded-lg text-xl px-8 bg-green-400">
            Start Now
          </button>
        </div>
      </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-32">
        <p>Cloned By</p>
        <p className="text-2xl text-green-400">Vaibhav Rajpoot</p>
      </div>
    </>
  );
};

export default Header;
