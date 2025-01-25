import { createContext, useState } from "react";
import React from 'react'


export let CounterContext = createContext(0);
export default function CounterContextProvider(props){
    const[counter,setCounter]=useState(10)
    const[userName,setUserName]=useState("maro")
    function Increment (){
        setCounter(counter+1)
    }
    function Decrement (){
        setCounter(counter - 1)
    }

    return <CounterContext.Provider value={{counter ,userName,Increment,Decrement }}>
        {props.children}

    </CounterContext.Provider>
}

