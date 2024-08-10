import React from 'react'

const Item
 = () => {
  return (
    <div className='item w-[350px] hover transform scale-105 transition-all duration '>
        <img src={props.image} alt="" />
        <p className='m-[6px]'>{props.name}</p>
        <div className='item-prices flex gap-[20px]'>
            <div className="items-price-new text-cyan-600 text-lg font-semibold">
                {props.new_price}
            </div>
            <div className="item-price-old text-cyan-500 text-lg font-semibol line-through">
                {props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item
