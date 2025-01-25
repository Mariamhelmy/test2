import { Formik, useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

export default function CheckOut() {
   let {generateOnlinePayment ,CartId} = useContext(CartContext)
 async  function handlePayment (values){
    console.log(values);
    let data = await   generateOnlinePayment(CartId,values)
    console.log(data);
    if(data.data.session){
        console.log(data.data.session);
        
        console.log(data.data.session.url);
        window.location.href = data.data.session.url;
        
    }
    

   }
    let formik =useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:''
        },
        onSubmit:handlePayment
    })
  return (
    <>
    <div className="container">
        <form className='w-75 mx-auto my-5 pt-5' onSubmit={formik.handleSubmit}>
            <label htmlFor="details" className='mt-5'>Details</label>
            <input type="text" className='form-control mb-3 ' name='details' id='details' value={formik.values.details} onChange={formik.handleChange} />
        
            <label htmlFor="phone">Phone</label>
            <input type="tel" className='form-control mb-3' name='phone' id='phone' value={formik.values.phone} onChange={formik.handleChange} />
      
        
            <label htmlFor="city">City</label>
            <input type="text" className='form-control mb-3' name='city' id='city' value={formik.values.city} onChange={formik.handleChange} />


                <button type='submit' style={{backgroundColor:"#E26719",color:"white"}} className='btn w-100'>Pay</button>
        </form>

    </div>
      
    </>
  )
}
