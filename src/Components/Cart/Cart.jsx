import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../../Context/CounterContext'
import { CartContext } from '../../Context/CartContext'
import { Offline } from "react-detect-offline";
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';



export default function Cart() {
  const[cartDetails,setCardDetails]=useState({})
  let {getCart ,updateCart,removeCart} =useContext(CartContext)
  async function getCartDetails(){
    let res = await getCart()
    console.log(res);
    setCardDetails(res.data)

    
  }
  async function updateCartDetails(id,count){
    let res = await updateCart(id,count)
    console.log(res);
    setCardDetails(res.data)

    
  }
  async function deleteCart(id){
    let res = await removeCart(id)
    console.log(res);
    setCardDetails(res.data)

    
  }
  useEffect(()=>{
    getCartDetails()
   
  },[])
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Shop Cart</title>
            </Helmet>
    <Offline><span className='network-status'>Only shown offline (surprise!)</span></Offline>

      
    {cartDetails && cartDetails.data && <div className="container py-5 my-5">
      <div className="bg-main-light p-5">
      <h3>Cart Details</h3>
      <h4>Total Price :{cartDetails.data.totalCartPrice}</h4>
      {cartDetails.data.products.map((product) => <div key={product.id} className='row border-bottom border-bottom-danger p-2'>
        <div className="col-md-1">
          <img src={product.product.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
          <h4>{product.product.title}</h4>
          <p className='text-main'>{product.price} EGP</p>
          <button className='btn text-danger' onClick={()=>deleteCart(product.product._id)}> <i className='fa fa-trash'></i> Remove</button>
          </div>
          <div className='d-flex align-items-center' >
            <button className='btn btn-cart bg-main text-white' onClick={()=> updateCartDetails(product.product._id,product.count+1)}>
              +
            </button>
            <p className='mx-3 mb-0'>{product.count}</p>
            <button className='btn btn-cart' onClick={()=> updateCartDetails(product.product._id,product.count-1)}>
              -
            </button>

          </div>
        </div>
      </div>)}
           <Link to={"/checkout"} className='btn bg-main text-white  my-5'>Procceed to payment</Link>

      </div>
      </div>}
    
    </>
  )
}
