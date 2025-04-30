import React from 'react'
import {useMemo} from "react";
import { useState } from 'react';
const SampleuseMemo = () => {
    const[dark,setdark]=useState(false);
    const [count,setcount]=useState(0);
    const themeChange=useMemo(()=>{
    return{backgroundColor:dark?"black":"white",
    color:dark?"white":"black",
    width:300,
    borderRadius:20,
    height:100,
    padding:20,
    paddingTop:50,
    paddingLeft:70,
}} ,[dark] )

const increment=useMemo(()=>{return (<h4>Double of count value: {count*2}</h4>)},[count])
  return (<>
    <div>
    <button onClick={()=>setdark(!dark)}>changetheme</button>
    <h1 style={themeChange}>I am happy</h1>
    </div>
    <div>
      <button onClick={()=>{setcount(count+1)}}>increment count</button>
      <h3>count value: {count}</h3>
      {increment}
    </div>
    </>
  )
}

export default SampleuseMemo
