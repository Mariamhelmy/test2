import { createContext, useEffect, useState } from "react";
import Cart from "../Components/Cart/Cart";
import axios from "axios";

export let CartContext = createContext(0)
export default function CartContextProvider(props){
    const[numOfCartItem,setNumOfCartItem]=useState(0)
    const[CartId,setCartId]=useState(null)

    useEffect(() => {
        getInitialValue()

    },[])
     async function getInitialValue(){
      let {data} = await  getCart()
      
      if (data.status =='success'){
        setNumOfCartItem(data.numOfCartItems)
        setCartId(data.data._id)
        console.log(data.numOfCartItems, "from hola", data.data._id);
      }
      
     }
    function createCart(x){
       return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId : x},{
            headers :{
                token:localStorage.getItem("userToken")
            }
        }).then(res => res)
        .catch(err => err)
    }
    function getCart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
             headers :{
                 token:localStorage.getItem("userToken")
             }
         }).then(res => res)
         .catch(err => err)
     }
     function updateCart(id,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},{
             headers :{
                 token:localStorage.getItem("userToken")
             }
         }).then(res => res)
         .catch(err => err)
     }
     function removeCart(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
             headers :{
                 token:localStorage.getItem("userToken")
             }
         }).then(res => res)
         .catch(err => err)
     }
     function generateOnlinePayment(cartId,shippingAddress){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,{shippingAddress:shippingAddress},{
            headers :{
                token:localStorage.getItem("userToken")
            }
        }).then(res => res)
        .catch(err => err)
     }
    const[cart ,setCart]=useState(0)
return <CartContext.Provider value={{setNumOfCartItem,CartId,numOfCartItem,cart ,createCart, getCart, updateCart,removeCart,generateOnlinePayment}}>
    {props.children}
</CartContext.Provider>
}