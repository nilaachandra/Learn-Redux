import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Cartpage = () => {
    const cartCount = useSelector(state => state.cart)
  return (
    <div className='w-full lg:px-20 px-16'>
        <h1 className='font-bold text-3xl'>Products</h1>
        <div  className='flex flex-wrap gap-12 my-4'>
            {cartCount.map((item, index) => (
                <div key={index}>
                    <Card
                itemImg={item.image}
                itemName={item.title}
                itemPrice={Math.round(item.price * 72)}
                />
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default Cartpage