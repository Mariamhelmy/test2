import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from'axios';
import {useNavigate} from 'react-router-dom'
import {Helmet} from "react-helmet";



export default function Register() {
  const[isLoading,settIsLoading]=useState(false)
  const[errorsMessage,setErrorsMessage]=useState(null)
  let navigate = useNavigate()

  async function register(values){
    console.log("btee5",values);
    settIsLoading(true)
    setErrorsMessage(null)
    let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((err)=>{
    console.log(err)
    settIsLoading(false)
    setErrorsMessage(err.response.data.message)
  }
  
    )
    console.log(data);
    if(data.message=="success"){ 
      navigate("/login")


      settIsLoading(false)
    }
    
    
  
    } 
  let mySchema =Yup.object({
    name: Yup.string().required("Name Is Required").min(3,"min char is 3").max(15,"max char is 15"),
    email:Yup.string().email("Invalid Email").required("Required"),
    password:Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,20}$/,"Password must be between 6 and 20 characters, and contain at least one uppercase letter, one lowercase letter, and one number.").required("Required"),
    rePassword:Yup.string().required("Required").oneOf([Yup.ref('password')],"rePassword must be match"),
    phone:Yup.string().required("Phone Is Required").matches(/^01[0125][0-9]{8}$/,"Invalid Phone")
  })
  let formik=useFormik({
    initialValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    
    validationSchema:mySchema,
    onSubmit:(values)=> register(values)
    
})
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
    <div className="container my-5 mt-5 pt-5">
      <h3 className='mt-5'>Register Now :</h3>
      {errorsMessage ?<div className='alert alert-danger'>{errorsMessage}</div> :''}
      <form  className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className='form-control mb-3'  name='name' id='name' onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={formik.values.name}/>


       {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : ''}

         <label htmlFor="email">Email</label>
        <input type="email" className='form-control mb-3'  name='email' id='email' onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={formik.values.email}/>


        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : ''}



         <label htmlFor="password">Password</label>
        <input type="password" className='form-control mb-3'  name='password' id='password' onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={formik.values.password}/>
        {formik.errors.password && formik.touched.password  ? <div className='alert alert-danger'>{formik.errors.password}</div> : ''}

       <label htmlFor="rePassword">RePassword</label>
        <input type="password" className='form-control mb-3'  name='rePassword' id='rePassword' onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={formik.values.rePassword}/>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> : ''}


       <label htmlFor="phone">Phone</label>
        <input type="tel" className='form-control mb-3'  name='phone' id='phone' onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={formik.values.phone}/>

             {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : ''}
 
        {isLoading ? <button  className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main text-white'>Register</button>}
       
       



      </form>

    </div>
      
    </>
  )
}
  // function validate(values) {
  //   let errors={};
  //   if(!values.name){
  //     errors.name="Required"
  //   }else if(values.name.length < 3){
  //     errors.name="Must be more than 3 char"
  //   }



  //   if(!values.email){
  //     errors.email="Required"
  //   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  //     errors.email="Invalid Format"
  // }


  // if(!values.password){
  //   errors.password="Required"
  // }else if(!/^[A-Z][a-z0-9]{3,8}$/i.test(values.password)){
  //   errors.password="password must start with capital"
  // }


  
  // if(!values.rePassword){
  //   errors.rePassword="Required"
  // }else if(values.rePassword!=values.password){
  //   errors.rePassword="password and rePassword not matched"
  // }



  // if(!values.phone){
  //   errors.phone="Required"
  // }else if(!/^01[0125][0-9]{8}$/i.test(values.phone)){
  //   errors.phone="Invalid Phone"
  // }  
  //   return errors;
    


  // }
  // /^[A-Z][a-z0-9]{3,8}$/