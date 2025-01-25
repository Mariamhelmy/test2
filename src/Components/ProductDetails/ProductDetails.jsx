import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function ProductDetails() {
    let {createCart}=useContext(CartContext)
    let {id} = useParams()
    console.log(id);
    const[productDetails ,setProductDetails]=useState([])
   
    async function getProductDetails() {
        let {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        console.log(data.data);
        setProductDetails(data.data)
        
    }
     useEffect(()=>{
        getProductDetails()

    },[])

    
  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="row align-items-center py-5">
            <div className="col-md-4">
                <img src={productDetails.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-8">
                <h1>{productDetails.title}</h1>
                <p>{productDetails.description}</p>
                <div className="d-flex justify-content-between">
                        <p>{productDetails.price} EGP</p>
                        <div>
                             <i className='fa fa-star rating-color'></i>
                        {productDetails.ratingsAverage}
                        </div>
                       
                    </div>
                    <button onClick={()=>createCart(productDetails._id)} className='btn bg-main text-white w-100'>+ add</button>

            </div>
        </div>
    </div>
    </>
  )
}
