import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full p-5 flex justify-around items-center">
        <div>
          <h1 className="text-2xl font-extrabold">Toka</h1>
        </div>
        <div className="   md:flex hidden gap-10 items-center">
            <p>NFT</p>
            <p>Crypto</p>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Online Shop</p>
            <p>Blog</p>
            <button className="border bg-transparent py-1 px-3 rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
