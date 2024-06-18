import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../features/Cartslice";

const Cart1 = ({ closeModal }) => {
    const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="relative bg-white p-8 mx-4 my-8 max-w-full max-h-full overflow-y-auto rounded-lg shadow-lg">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
              <h3 className="text-xl font-semibold">Shopping Bag1</h3>
              <IoMdClose onClick={closeModal} />
            </div>

            <div className="relative p-6 flex-auto">
              <div className="h-96 overflow-y-auto">
                <div className="flex flex-col justify-center items-start">
                  {cart.map((item, index) => (
                    <div key={item}>
                      <div className="grid grid-cols-2 py-4">
                        <div>
                          <img
                            className="h-[125px] rounded-md"
                            src={item.img}
                            alt={item.name}
                          />
                          <div className="flex items-start">
                            <h4 className="text-black font-inter font-bold text-base tracking-normal leading-none pt-4">
                              {item.name}
                            </h4>
                          </div>
                          <div className="max-w-xs">
                            <p className="text-gray font-inter text-xs tracking-normal leading-none pt-4">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                            Selected Size :{" "}
                            <span className="ml-2">{item.size}</span>
                          </p>
                          <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                            Selected Color :
                            <span
                              className="ml-2 rounded-full  px-2"
                              style={{ backgroundColor: item.color }}
                            ></span>
                          </p>
                          <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                            Amount: <span className="ml-2">{item.amount}</span>
                          </p>
                          <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                            Single Item Price:{" "}
                            <span className="ml-2">{item.price}$</span>
                          </p>
                          <p className="text-black font-inter text-sm tracking-normal leading-none pt-2">
                            Total Item Price:{" "}
                            <span className="ml-2">{item.totalPrice}$</span>
                          </p>
                          <div onClick={() => dispatch(removeFromCart(item))} className="flex justify-center items-center w-1/3 border border-red-300 mt-4 rounded-lg text-red-700 hover:bg-red-800 hover:text-white">
                            <button className="text-base">Delete</button>
                            <MdDelete className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start p-6 border-t border-solid border-gray-300 rounded-b">
              <p className="text-black font-inter text-base font-bold tracking-normal leading-none pt-2">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div className="relative bg-white p-8 mx-4 my-8 max-w-full max-h-full overflow-y-auto rounded-lg shadow-lg">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
              <h3 className="text-xl font-semibold">Shopping Bag</h3>
              <IoMdClose onClick={closeModal} />
            </div>

            <div className="relative p-6 flex-auto">
              <div className="h-96 overflow-y-auto">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-black text-3xl font-bold font-inter py-4 tracking-normal leading-none">
                    Your Bag Is Empty
                  </h1>
                  <p className="text-black text-base font-inter py-4 tracking-normal leading-none">
                    Add Some Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart1;
