import React, { useState } from "react";
import { useSelector } from "react-redux";

import { addToCart } from "../features/Cartslice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : " ";
  const productColor = product[0].color;
  
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const dispatch = useDispatch();

  return (
    <div>
      {product.map((item, index) => (
        <div key={index} className="flex justify-center items-center py-10">
          <div className="pl-44 grow-[2]">
          
            <img className="h-[700px] rounded-lg" src={item.img}  alt="item"/>
          </div>
          <div className="grow-[3]">
            <div className="max-w-lg">
              <h5 className=" text-2xl font-inter font-bold tracking-normal leading-none">
                {item.name}
              </h5>
              <p className="text-orange-900 text-lg font-inter font-bold tracking-normal leading-none pb-4">
                15% OFF
              </p>
              <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none py-4">
                {item.text}
              </p>
              {item.size ? (
                <div className="pb-4">
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a Size
                    </label>
                    <select
                      name="size"
                      id="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.size.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="pb-4">
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a Size
                    </label>
                    <select
                      name="size"
                      id="size"
                      disabled={true}
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item?.size?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="pb-4">
                <div>
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a Color
                  </label>
                  <select
                    name="color"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {item.color.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        color: color,
                        img: item.img,
                        text: item.text,
                        size: size,
                        name: item.name,
                        amount: 1,
                        totalPrice: item.price,
                        price: item.price,
                      })
                    )
                  }
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
