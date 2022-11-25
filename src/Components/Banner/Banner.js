import React, { useState } from 'react'
import { data } from '../../JsonData'
import ProductCard from '../ProductCard/ProductCard'


const Banner = () => {

    const [productData]=useState(data)

  return (
    <div className='my-5 container grid grid-cols-12  justify-between gap-8'>
        <div className='  container col-span-5 my-[40%]'>
            <h1 className=' text-7xl font-normal '>
                We picked <br />
                 some 
                 <span className=' text-primary  font-bold'>cool <br /> things</span>  for <br /> you!
                 </h1>
        </div>
        <div  className=' col-span-7'>
            <h1 className=' text-left py-3 border-b-2 text-lg font-semibold  border-primary border-dotted'>hot deals for you</h1>
            <div className=' grid grid-cols-3 gap-3'>
                {/* {
                    productData?.map((item,i)=>(<ProductCard data={item}/>))
                } */}
                
                <ProductCard data={productData[0]}/>
                <ProductCard data={productData[1]}/>
                <ProductCard data={productData[3]}/>
                <ProductCard data={productData[4]}/>
                <ProductCard data={productData[5]}/>
                <ProductCard data={productData[6]}/>
                
            </div>
        </div>
    </div>
  )
}

export default Banner