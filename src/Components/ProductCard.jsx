import React from "react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../features/Productsslice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductCard = ({ id, name, img, text, price, colors }) => {
  const dispatch = useDispatch();
  const {type}= useParams()
  return (
    <Link to={`/filteredproducts/${type}/` + id}>
      <div
        onClick={() => {
          dispatch(singleProduct(id));
        }}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img className="rounded-t-lg" src={img} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3   text-base font-light text-gray-700 dark:text-gray-400">
            {text}
          </p>
          <div className="flex justify-between">
            <div className="text-base font-bold">{price}$</div>
            <div className="flex justify-center items-center gap-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="rounded-full p-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
