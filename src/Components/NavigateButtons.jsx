import React from "react";
import clothes from "../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../features/Productsslice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={`/filteredproducts/${button}`}>
                <button
                  onClick={() => {
                    dispatch(filteredProducts(button));
                  }}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {button}
                  </span>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="p-4">
        <img
          className="h-[600px] w-[70%] mx-auto rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
