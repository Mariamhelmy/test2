import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import MainSlider from './Components/MainSlider/MainSlider.jsx'

import NotFound from './Components/NotFound/NotFound.jsx'
import Product from './Components/Product/Product.jsx'
import Logout from './Components/Logout/Logout.jsx'
import  {jwtDecode} from 'jwt-decode';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CounterContextProvider from './Context/CounterContext'
import CartContextProvider from './Context/CartContext.jsx'
import  { Toaster } from 'react-hot-toast';
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'

function App() { 
 
  const[ userData,setUserData]=useState(null)

     useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveUser()
    }

  },[])
  function saveUser(){
    let encodedToken=localStorage.getItem("userToken")
    let decoded = jwtDecode(encodedToken);

    console.log(decoded);
    
    setUserData(decoded);
  }
 
 const route =createHashRouter([
  {
  path:"",element:<Layout userData={userData} setUserData={setUserData}/>, children:[
    {index:true,element:<ProtectedRoutes><Home/></ProtectedRoutes> } ,
    {path:"cart",element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
    {path:"home",element:<ProtectedRoutes><Home/></ProtectedRoutes>},
    {path:"product-details/:id",element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},

    {path:"login",element:<Login saveUser={saveUser}/>},
    {path:"logout",element:<Logout/>},

    {path:"register",element:<Register/>},
    {path:"mainslider",element:<MainSlider/>},
    // {path:"product",element:<ProtectedRoutes><Product/></ProtectedRoutes>},
    {path:"checkout",element:<ProtectedRoutes><CheckOut/></ProtectedRoutes>},
    {path:"allorders",element:<ProtectedRoutes><Allorders/></ProtectedRoutes>},





    {path:"*", element: <NotFound/>}

]}
])


  return (
    <>
    <CartContextProvider>
    <CounterContextProvider>
      <Toaster></Toaster>
       <RouterProvider router={route}></RouterProvider>

    </CounterContextProvider>
    </CartContextProvider>
    </>
  )
}

export default App
