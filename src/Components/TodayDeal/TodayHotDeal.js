import React, { useState } from "react";
import { data } from "../../JsonData";
import ProductCard from "../ProductCard/ProductCard";

const TodayHotDeal = () => {
  const [productData] = useState(data);
  return (
    <div  className=" container">
      <div >
        <h1 className=" text-left text-lg font-semibold py-3 border-b-2 border-primary border-dotted">
          hot deals for you
        </h1>
      </div>
      <div className="my-3 grid grid-cols-5 gap-4">
        {productData?.map((item, i) => (
          <div className=" hover:border-2 px-2 rounded-xl transition-all duration-700 " key={i} >
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayHotDeal;
