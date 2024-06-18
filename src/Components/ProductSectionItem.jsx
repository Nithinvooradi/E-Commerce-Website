import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cartslice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  color,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <div className=" relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
        <p className="text-red-700 text-base font-inter absolute top-12 right-8 z-[10] rotate-45 font-medium">SALE%</p>
        <div>
          <img className="p-6 h-70 " src={img} alt="product" />
        </div>

        <div className="px-8 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="text-gray font-inter font-normal text-base">{text}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-base font-bold text-gray-900 dark:text-white">
              <span className="text-red-800">Size Left : </span>{defaultSize}
            </span>
            <span className="text-base font-bold text-gray-900 dark:text-white">
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </span>
          </div>
          <div className=" flex justify-between items-center mt-4  border-t-2 p-2">
            <h2 className="font-inter font-bold text-xl">{price}$</h2>
            <button
              className="text-xl border rounded-lg px-6 py-2 w-[70%] hover:bg-blue-800 hover:text-white "
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    name: name,
                    text: text,
                    size: defaultSize,
                    color: defaultColor,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionItem;
