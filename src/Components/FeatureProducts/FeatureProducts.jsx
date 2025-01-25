import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast  from 'react-hot-toast';


export default function FeatureProducts() {
    let{ createCart , setNumOfCartItem}=useContext(CartContext)
    const[allProducts ,setAllProducts]=useState([])
   
    async function getProduct() {
        let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        console.log(data.data);
        setAllProducts(data.data)
        
    }
  async  function generateCart(productId){
      let response =await createCart(productId)
      console.log(response,"from featurecomponent");
      if(response.data.status =="success"){
        toast.success(response.data.message,{
            position:"bottom-right",
            className:"text-center border-success border-2 box-shadow"
        })
        setNumOfCartItem(response.data.numOfCartItems)

      }else{
        toast.error(response.data.message,{
            position:"bottom-right",
            className:"text-center border-success border-2 box-shadow"
        })
      }
      
    }
     useEffect(()=>{
        getProduct()

    },[])

  return (
    <>
    <div className="container py-5">
        <div className="row">
            {allProducts.map((product)=><div className="col-md-2" key={product.id}>
                <div className="product px-2 py-3">
                    <Link to={'/product-details/' + product.id} style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src={product.imageCover} className='w-100' alt="" />
                    <p className='text-main'>{product.category.name}</p>
                    <h3 className='h6'>{product.title.split(" ").splice(0,2).join(" ")}</h3>
                    <div className="d-flex justify-content-between">
                        <p>{product.price} EGP</p>
                        <div>
                             <i className='fa fa-star rating-color'></i>
                        {product.ratingsAverage}
                        </div>
                       
                    </div>
                    </Link>
                    
                    <button onClick={()=>generateCart(product._id)} className='btn bg-main text-white w-100'>+ add</button>
                </div>
                
            </div>)}
            
        </div>
    </div>
      
    </>
  )
}
