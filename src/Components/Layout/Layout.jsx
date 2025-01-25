import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import Logout from '../Logout/Logout'

export default function Layout({userData ,setUserData}) {
  let navigate= useNavigate()
  function logOut(){
    localStorage.removeItem("userToken")
    setUserData(null)

    navigate("/login")
  }
  return (
    <>
    <NavBar userData={userData} logOut={logOut}/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}
