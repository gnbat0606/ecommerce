import React from "react";

export const TopHeader = () => {
  return (
    <div className="w-full bg-black text-white flex justify-center relative h-12">
      <div className="flex gap-[231px]">
        <div className="flex items-center gap-8">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button>ShopNow</button>
        </div>
        <select
          name="language"
          className=" w-24 h-8 absolute right-12 top-2 bg-black border-white border-[1px] rounded-md "
        >
          <option value="en">English</option>
          <option value="mn">Монгол</option>
        </select>
      </div>
    </div>
  );
};
