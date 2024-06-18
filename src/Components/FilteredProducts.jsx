import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Error from "./Error";
import {
  filterByColor,
  filterBySize,
  filterGender,
  filteredProducts,
  sortByPrice,
} from "../features/Productsslice";

const FilteredProducts = () => {
  const { type } = useParams();

  const products = useSelector((state) => state.products.filteredProducts);
  const genderButtons = ["Male", "Female"];
  const [colorDrop, setColorDrop] = useState(false);
  const [sizeDrop, setSizeDrop] = useState(false);
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "Xl"];
  const dispatch = useDispatch();
  const error = useSelector((state) => state.products.error);

  return (
    <div>
      <div className="pt-16">
        <div className="pl-8 ">
          <h1 className="text-4xl font-bold font-inter text-gray-600 tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex justify-between items-center py-8">
            <div className="flex items-center">
              {genderButtons.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => dispatch(filterGender(item))}
                    className="border rounded-md p-2 text-base w-auto h-auto border-gray-800 text-black hover:bg-gray-800 hover:text-white mr-4"
                    style={{ minWidth: "100px" }}
                  >
                    {item}
                  </button>
                </div>
              ))}
              <button
                onClick={() => dispatch(sortByPrice())}
                className="border rounded-md p-2 text-base w-auto h-auto border-gray-800 text-black hover:bg-gray-800 hover:text-white mr-4"
                style={{ minWidth: "100px" }}
              >
                High Price
              </button>

              <div>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center border rounded-md p-2 text-base w-auto h-auto border-gray-800 text-black hover:bg-gray-800 hover:text-white mr-4"
                      style={{ minWidth: "100px" }}
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={() => setColorDrop(!colorDrop)}
                    >
                      Select a Color
                    </button>
                  </div>
                  {colorDrop && (
                    <div className="origin-top-right absolute left-2 mt-2 w-54 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {colorButtons.map((item, index) => (
                          <li
                            onClick={() => {
                              dispatch(filterByColor(item));
                              setColorDrop(!colorDrop);
                            }}
                            key={index}
                            className="block px-6 py-2 text-left  text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            style={{ color: item }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      disabled={type === "Bags" || type === "Shoes"}
                      type="button"
                      className="inline-flex justify-center border rounded-md p-2 text-base w-auto h-auto border-gray-800 text-black hover:bg-gray-800 hover:text-white mr-4"
                      style={{ minWidth: "100px" }}
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={() => setSizeDrop(!sizeDrop)}
                    >
                      Select a Size
                    </button>
                  </div>
                  {sizeDrop && (
                    <div className="origin-top-right absolute left-2 mt-2 w-54 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <ul
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {sizeButtons.map((item, index) => (
                          <li
                            onClick={() => {
                              dispatch(filterBySize(item));
                              setSizeDrop(!sizeDrop);
                            }}
                            key={index}
                            className="block px-6 py-2 text-left  text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            style={{ color: item }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pr-14">
              <button
                onClick={() => dispatch(filteredProducts(type))}
                className="border rounded-md p-2 text-base w-auto h-auto border-gray-800 text-black hover:bg-gray-800 hover:text-white mr-4"
                style={{ minWidth: "100px" }}
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-4 gap-8 justify-center items-center py-8 p-4">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
