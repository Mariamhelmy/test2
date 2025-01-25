

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Product() {

  const[brand,setBrand]=useState([])
  async function getBrand(){
    let response  =await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    console.log(response .data);
    setBrand(response.data.data)
    
  } 

  useEffect(()=>{
    getBrand()

  },[])
  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row">
          {brand.map((bran)=> <div className="col-md-4">
            <img style={{backgroundColor:'blue'}} src={bran.image} height={300} width={'100%'} alt="" />
            <h3 className='text-center'>{bran.name}</h3>
          </div>
        )}

        </div>
      </div>
    </>
  )
}

// import React, { useContext, useState ,useEffect} from 'react'
// import { CounterContext } from '../../Context/CounterContext'
// import {Helmet} from "react-helmet";
// import axios from 'axios'

// export default function Product() {
//   const[brandProduct,setBrandProduct]=useState({})

//  async function brand(){
//     let data = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
//     console.log(data.data ,"from brandProduct");
//     setBrandProduct(data.data)
//   }
//    useEffect(()=>{
//     brand()
  
//       },[])
  
//   return (
//     <>
//          <Helmet>
//                       <meta charSet="utf-8" />
//                       <title>Product Page</title>
//          </Helmet>
//          <div className="container">
//           <div className="row">
//             {brandProduct.map((brand)=>
//             <div className='col-md-4'>
//                       <img src={brand.image} height={300} width={'100%'} alt="" className='mt-5'/>

//             </div>)}
//           </div>
//          </div>



//     </>
//   )
// }
  // let x = useContext(CounterContext)
  // console.log(x ,"from product");