import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart1 from "./Cart1";
import {  useSelector } from "react-redux";


const NavBar = () => {
  
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
 
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-25 w-full" src={logo} alt="store" />
        </div>
        <div className="flex  flex-row items-center ">
          <div>
            <p className="font-inter text-xl font-bold tracking-normal leading-none text-center mr-12">
              <span>Welcome </span>
              
            </p>
          </div>

          <div className="flex flex-row items-center mr-6">
            <FaRegHeart className="h-5 w-5 mr-1" />
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
              WISHLIST
            </p>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex flex-row justify-center items-center mr-4"
          >
            <div className="relative flex justify-center items-center mr-1">
              <HiOutlineShoppingBag className="h-5 w-5 " />
              {totalAmount > 0 && (
                <div className="absolute flex justify-center items-center left-2 bottom-2 p-1  rounded-full w-3 h-3 bg-red-400  text-xs">
                  {totalAmount}
                </div>
              )}
            </div>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center ">
              SHOPPING BAG
            </p>
          </div>
          <div>{open && <Cart1 closeModal={() => setOpen(false)} />}</div>

          
        </div>
      </div>
      <div className="bg-black p-4 w-full flex justify-around items-center">
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          50% OFF
        </div>
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Free Shipping and Returns
        </div>
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          Different Payment Methods
        </div>
      </div>
    </div>
  );
};

export default NavBar;
