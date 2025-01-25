import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


export default function Categories() {
    const[categories ,setCategories]=useState([])
   
    async function getCategories() {
        let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
        console.log(data.data);
        setCategories(data.data)
        
    }
     useEffect(()=>{
        getCategories()

    },[])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
  return (
    <div className='container mt-5'>
      <Slider {...settings}>
     {categories.map((category)=> <div>
        <img src={category.image} height={300} width={'100%'} alt="" className='mt-5'/>
        <h3 className='h6'>{category.name}</h3>
     </div>)}
    </Slider>
      
    </div>
  )
}
