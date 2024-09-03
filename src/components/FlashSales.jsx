import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FlashSalesCards } from "./FlashSalesCards";

export async function FlashSales() {
  const result = await fetch("https://fakestoreapi.com/products");
  const obresult = await result.json();
  return (
    <div className=" flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div className="flex gap-[87px] items-end">
          <div className="flex flex-col gap-6">
            <div className="flex font-semibold items-center gap-4">
              <div className="bg-red-600 w-5 h-10 rounded-md"></div>
              <div className="text-red-600">Today's</div>
            </div>
            <h1 className="text-4xl">Flash Sales</h1>
          </div>
          <div className="flex gap-[58px] justify-start items-center">
            <div className="flex items-end gap-3">
              <div>
                <div className="text-xs">Days</div>
                <div className="s32">03</div>
              </div>
              <div className="colon">:</div>
              <div>
                <div className="text-xs">hours</div>
                <div className="s32">23</div>
              </div>
              <div className="colon">:</div>
              <div>
                <div className="text-xs">minutes</div>
                <div className="s32">19</div>
              </div>
              <div className="colon">:</div>
              <div>
                <div className="text-xs">seconds</div>
                <div className="s32">56</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <span className=" bg-gray-200 rounded-[50%] w-[46px] h-[46px] flex justify-center items-center">
            <FaArrowLeft className="w-6 h-6" />
          </span>
          <span className=" bg-gray-200 rounded-[50%] w-[46px] h-[46px] flex justify-center items-center">
            <FaArrowRight className="w-6 h-6" />
          </span>
        </div>
      </div>
      <FlashSalesCards posts={obresult} />
    </div>
  );
}
