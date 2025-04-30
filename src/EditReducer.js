import React from 'react'
import {useState} from "react";
const EditReducer = ({id,Uname,Uage,updateData}) => {
    const [name,setname]=useState(Uname||"");
    const [age,setage]=useState(Uage||"");
    return (
        <div className='a'>
        <input id="name" value={name} onChange={(e)=>{setname(e.target.value)} } placeholder='Enter name' />
        <input id="age" value={age} onChange={(e)=>{setage(e.target.value)} } placeholder='Enter age'/>
        
        <button onClick={()=>updateData(id,name,age)}>Edit</button>
    </div>
      )
}

export default EditReducer


