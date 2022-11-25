import React, { useState } from 'react'
import { data } from "../../JsonData";
import ProductCard from "../ProductCard/ProductCard";
const Furniture = () => {
    const [productData] = useState(data);
  return (
    <div className=" container">
      <div >
        <h1 className=" text-left text-lg font-semibold py-3 border-b-2 border-primary border-dotted">
        Deals on furniture
        </h1>
      </div>
      <div className="my-3 grid grid-cols-5 gap-4">
        {productData?.map((item, i) => (
          <div className=" px-2 " key={i} >
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Furniture