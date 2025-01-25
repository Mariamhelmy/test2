import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from'axios';
import {useNavigate} from 'react-router-dom'

export default function Login({saveUser}) {
  const[isLoading,settIsLoading]=useState(false)
  const[errorsMessage,setErrorsMessage]=useState(null)
  let navigate = useNavigate()

  async function login(values){
    console.log("btee5",values);
    settIsLoading(true)
    setErrorsMessage(null)
    let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((err)=>{
    console.log(err)
    settIsLoading(false)
    setErrorsMessage(err.response.data.message)
  }
  
    )
    console.log(data);
    if(data.message=="success"){ 


      settIsLoading(false)
       localStorage.setItem("userToken" , data.token) 
       saveUser()
       navigate("/")



    }
    
    
  
    } 
  let mySchema =Yup.object({
    email:Yup.string().email("Invalid Email").required("Required"),
    password:Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,20}$/,"Password must be between 6 and 20 characters, and contain at least one uppercase letter, one lowercase letter, and one number.").required("Required"),
  })
  let formik=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    
    validationSchema:mySchema,
    onSubmit:(values)=> login(values)
    
})
return (
      <>
      <div className="container my-5 mt-5 pt-5">
        <h3 className='mt-5'>Login Now :</h3>
        {errorsMessage ?<div className='alert alert-danger'>{errorsMessage}</div> :''}
        <form  className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
          
  
           <label htmlFor="email">Email</label>
          <input type="email" className='form-control mb-3'  name='email' id='email' onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.email}/>
  
  
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : ''}
  
  
  
           <label htmlFor="password">Password</label>
          <input type="password" className='form-control mb-3'  name='password' id='password' onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.password}/>
          {formik.errors.password && formik.touched.password  ? <div className='alert alert-danger'>{formik.errors.password}</div> : ''}
  
         
   
          {isLoading ? <button  className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button  className='btn bg-main text-white'>Login</button>}
         
         
  
  
  
        </form>
  
      </div>
      </>
    )
  }








// export default function Login({saveUser}) {
//   const[isLoading,settIsLoading]=useState(false)
//   const[errorsMessage,setErrorsMessage]=useState(null)
  
//   let navigate = useNavigate()

//   async function login(values){
//     console.log("btee5",values);
//     settIsLoading(true)
//     setErrorsMessage(null)
//     let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((err)=>{
//     console.log(err)
//     settIsLoading(false)
//     setErrorsMessage(err.response.data.message)
//   }
  
//     )
//     console.log(data);
//     if(data.message=="success"){ 
   


//       settIsLoading(false)
//       localStorage.setItem("userToken",data.token) 
//       saveUser()
    
//         navigate("/")
//     }
    
    
  
//     } 
//   let mySchema =Yup.object({
//     email:Yup.string().email("Invalid Email").required("Required"),
//     password:Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,20}$/,"Password must be between 6 and 20 characters, and contain at least one uppercase letter, one lowercase letter, and one number.").required("Required"),
//   })
//   let formik=useFormik({
//     initialValues:{
//       email:"",
//       password:"",
//     },
    
//     validationSchema:mySchema,
//     onSubmit:(values)=> login(values)
    
// })
//   return (
//     <>
//     <div className="container my-5">
//       <h3>Login Now :</h3>
//       {errorsMessage ?<div className='alert alert-danger'>{errorsMessage}</div> :''}
//       <form  className='w-75 mx-auto' onSubmit={formik.handleSubmit}>
        

//          <label htmlFor="email">Email</label>
//         <input type="email" className='form-control mb-3'  name='email' id='email' onChange={formik.handleChange}
//         onBlur={formik.handleBlur} value={formik.values.email}/>


//         {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : ''}



//          <label htmlFor="password">Password</label>
//         <input type="password" className='form-control mb-3'  name='password' id='password' onChange={formik.handleChange}
//         onBlur={formik.handleBlur} value={formik.values.password}/>
//         {formik.errors.password && formik.touched.password  ? <div className='alert alert-danger'>{formik.errors.password}</div> : ''}

       
 
//         {isLoading ? <button  className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button  className='btn bg-main text-white'>Login</button>}
       
       



//       </form>

//     </div>
//     </>
//   )
// }
