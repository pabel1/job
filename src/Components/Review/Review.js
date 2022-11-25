import React from "react";
import productImg1 from "../../Assets/image/Rectangle 4.png";
import productImg2 from "../../Assets/image/Rectangle 4 (1).png";
import { AiOutlineStar } from "react-icons/ai";
const Review = () => {
  return (
    <div className=" my-2 container ">
      <h1 className=" text-left text-lg font-semibold py-3 border-b-2 border-primary border-dotted">
        Review your purchase
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-3 overflow-x-auto">
        <div className=" my-4 flex items-center px-3 py-2  border-2 rounded-xl  ">
          <img src={productImg1} alt="" />
          <div className=" space-y-2">
            <h2>
              2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi,
              128GB)
            </h2>
            <p className=" text-sm text-textSecondary">
              you bought it at the best price <br />{" "}
              <span className=" text-black text-xl">₹99,900.00</span>{" "}
            </p>
            <p className=" text-primary flex items-center gap-2 text-lg">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />0 rating
            </p>
          </div>
        </div>
        <div className=" my-4 flex items-center px-3 py-2  border-2 rounded-xl  ">
          <img src={productImg2} alt="" />
          <div className=" space-y-2">
            <h2>
              2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi,
              128GB)
            </h2>
            <p className=" text-sm text-textSecondary">
              you bought it at the best price <br />{" "}
              <span className=" text-black text-xl">₹99,900.00</span>{" "}
            </p>
            <p className=" text-primary flex items-center gap-2 text-lg">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />0 rating
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Review;
