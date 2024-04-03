import React, { useEffect, useState } from 'react'
import Card from './Card'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.products);

    // const [products, getProducts] = useState([])

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(data => data.json())
    //     .then(result => getProducts(result))
    // }, [])



    const addToCart = (item) => {
        dispatch(add(item))
    }
    
    return (
        <div className='w-full lg:px-20 px-16'>
            <h1 className='font-bold text-3xl'>Products</h1>
            <div className='flex flex-wrap gap-12 my-4'>
                {data ? (
                    data.map((item, index) => (
                        <div key={index}>
                            <Card
                                key={index}
                                itemImg={item.image}
                                itemName={item.title}
                                itemPrice={Math.round(item.price * 72)}
                                onClick1={() => addToCart(item)}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
    
}

export default Products