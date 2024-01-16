import React from 'react'
import Product from '../../Components/Product/Product'
import { PRODUCTS } from '../../Static'

function Home() {
    return (
        <div className='code'>
            home
            <p></p>
            <Product data={PRODUCTS}/>
        </div>
    )
}

export default Home
