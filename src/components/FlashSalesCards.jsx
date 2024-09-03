"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

export const FlashSalesCards = ({ posts }) => {
  const pathname = usePathname();

  const [data, setData] = useState(posts.slice(0, 9));

  const moreHandler = () => {
    setData((prev) => posts.slice(0, prev.length + 5));
  };

  console.log(data);

  return (
    <div id="card" className="flex gap-[30px]  overflow-scroll ">
      {data.map(
        ({ id, title, price, rating, category, description, image }) => {
          return (
            <div className="border-gray-200 border-[1px] rounded-lg">
              <div className=" relative">
                <div className="w-[270px] h-[250px] flex items-center justify-center">
                  <div className="w-[190px] h-[180px] flex justify-center items-center">
                    <img
                      src={image}
                      alt=""
                      className=" bg-gray-200 scale-75 "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 absolute top-3 right-3">
                  <button className="w-[34px] h-[34px] bg-gray-300 flex justify-center items-center rounded-[50%]">
                    <CiHeart className="bg-gray-300 w-6 h-6" />
                  </button>
                  <button className="w-[34px] h-[34px] bg-gray-300 flex justify-center items-center rounded-[50%]">
                    <IoEyeOutline className="bg-gray-300 w-6 h-6" />
                  </button>
                </div>
              </div>
              <div>
                <div>{title}</div>
                <div className="text-red-600"> ${price} </div>
                <div className="flex gap-2">
                  <div className="text-yellow-500">{rating.rate}</div>
                  <div className="text-gray-500">({rating.count})</div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
