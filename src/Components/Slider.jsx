import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide, dotSlide } from "../features/Sliderslice";
import { sliderData } from "../assets/data/dummyData";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Slider = () => {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === sliderIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === sliderIndex && (
                <img className="h-[850px] w-full" src={item.img} alt="shoes" />
              )}
            </div>
            <div className="absolute top-44 mx-auto inset-x-1/4">
              <p className="text-white text-4xl font-inter font-bold">
                {parseInt(item.id) === sliderIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[47%]">
        {sliderData.map((dot, index) => (
          <div className="mr-4" key={index}>
            <div
              className={
                index === sliderIndex
                  ? "bg-green-300 rounded-full p-2 cursor-pointer"
                  : "bg-white rounded-full p-2 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(sliderIndex + 1))}
        >
          <FaArrowRightLong/>
        </button>
        <button 
        className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
          <FaArrowLeftLong/>
        </button>
      </div>
    </div>
  );
};

export default Slider;
