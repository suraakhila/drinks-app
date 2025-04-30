import React,{useCallback} from 'react'
import Count from "./Count.js"
import Button from './Button.js';
import {useState} from "react";
// import {useMemo} from "react";
const SampleuseCallback = () => {
    const[count,setcount]=useState(0);
    const[age,setage]=useState(0);
     const incrementage=useCallback(()=>{setage(age+1)},[age]);
    const incrementcount=useCallback(()=>{setcount(count+1)},[count]);
    // const incrementcount=useMemo(()=>{setcount(count+1)},[count]);
  return (
    <div>
      <Count title={"age"} number={age}/>
      <Button title={"age"} handler={incrementage}/>
      <Count title={"count"} number={count}/>
      <Button  title={"count"} handler={incrementcount} />
    </div>
  )
}

export default SampleuseCallback
