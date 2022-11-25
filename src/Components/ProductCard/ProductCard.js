import React from 'react'
import productImg  from '../../Assets/image/Rectangle 1.png'
const ProductCard = ({data}) => {

  return (
    <div>
       
        <div>
            <img className='' src={data.picture} alt="" />
        </div>
        <div className=' my-2 text-left space-y-2'>
            <p>{data.name}</p>
            <span className=' flex items-center justify-between'>
            <p>{data.price}</p>
            <p className=' text-red-600 '>-{data.discount}% off</p>
            </span>
            
        </div>
    </div>
    
  )
}

export default ProductCard