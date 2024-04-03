import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { remove } from '../store/cartSlice'
const Cartpage = () => {
    const cartCount = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
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
                onClick2={() => removeFromCart(item.id)}
                />
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default Cartpage