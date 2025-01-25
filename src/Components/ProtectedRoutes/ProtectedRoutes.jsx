import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes(props) {
if (localStorage.getItem("userToken")){
  return  props.children
}else{
    return <Navigate to='/login'/>
}
console.log(props);
// return<h2>hello from protected</h2>

}
