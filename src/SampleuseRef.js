import React, { useEffect } from 'react';
import {useRef} from "react";
import {useState} from "react";
const SampleuseRef = () => {
  const [name,setname]=useState("");
    const inputform=useRef("");
    const count=useRef(1);
    useEffect(()=>{count.current=count.current+1; console.log(count.current);})
  return (
    <div className='a'>
      <input ref={inputform} type="text" placeholder="Enter number" value={name} onChange={(e)=>setname(e.target.value)} />
      <button onClick={()=>inputform.current.focus()} >Edit</button>
  <h3>Component rendered {count.current} </h3>
    </div>

  )
}

export default SampleuseRef
