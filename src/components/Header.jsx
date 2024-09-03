import React from "react";
import { FiSearch } from "react-icons/fi";
import { TfiHeart } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="mt-8 border-b-gray-200 border-b-[1px] pb-3">
      <div className="flex gap-[148px] justify-between px-[135px]">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <div className="flex gap-12">
          <button>Home</button>
          <button>Contact</button>
          <button>About</button>
          <button>Sign Up</button>
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-gray-100 flex gap-6 items-center rounded-md py-2 px-4">
            <input
              type="text"
              placeholder="What are you looking for"
              className="bg-gray-100"
            />
            <FiSearch />
          </div>
          <TfiHeart className=" w-6 h-5" />
          <IoCartOutline className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};
