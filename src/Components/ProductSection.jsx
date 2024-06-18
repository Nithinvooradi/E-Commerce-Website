import React from "react";
import { storeData } from "../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black w-[50%] mx-auto p-2 rounded-md">
        <h2 className="text-red-600 text-center font-bold font-inter text-lg">
          CASUAL WEAR SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-4 mx-auto max-w-6xl">
        {storeData.slice(4, 10).map((product, index) => (
          <div key={index}>
            <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              size={product.size}
              color={product.color}
              price={product.price}
              text={product.text}
              totalPrice={product.totalPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
