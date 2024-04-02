import React, { useEffect, useState } from 'react'
import Card from './Card'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Products = () => {
    const dispatch = useDispatch()

    const [products, getProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))
    }, [])

    const addToCart = (item) => {
        dispatch(add(item))
    }
    
  return (
    <div className='w-full lg:px-20 px-16'>
        <h1 className='font-bold text-3xl'>Products</h1>
        <div  className='flex flex-wrap gap-12 my-4'>
            {products.map((item, index) => (
                <div key={index}>
                    <Card key={index}
                itemImg={item.image}
                itemName={item.title}
                itemPrice={Math.round(item.price * 72)}
                onClick={() => addToCart(item)}
                />
                </div>
                
            ))}
        </div>
        
    </div>
  )
}

export default Products