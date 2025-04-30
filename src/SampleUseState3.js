import React, { useState } from 'react'

const SampleUseState3 = () => {
    const[data,setdata]=useState({
        username:"",
        age:""
    });
    const[items,setitems]=useState([]);
    const[isEditing,setEditing]=useState(false);
    const[editindex,seteditindex]=useState(null);
    function handleAppOrUpdate(index){
      if(data.username==""||isNaN(data.age))
        return;
      if(isEditing){
       
        const modifieditems=[...items];
       modifieditems[index]=data;
       setitems(modifieditems)
       setEditing(false);
       seteditindex(null);
      }
      else{
        setitems([...items,data]);
      }
      setdata({ username: '', age: '' });
    }

    function handleEditing(index){
      setEditing(true);
      seteditindex(index);
      setdata(items[index])
    }
    function handleDelete(index){
      const modifieditems=[...items];
     const newArray=modifieditems.filter((eachObj,index1)=>{
      return index!=index1;
     });
      setitems(newArray);
    }
  return (
    <>
   <ul>
     <li>
        <input type="text" value={data.username} onChange={(e)=>setdata({...data,username:e.target.value})} placeholder="Enter your name"/>
        <input type="text" value={data.age} onChange={(e)=>setdata({...data,age:e.target.value})} placeholder="Enter your age"/>
        <button onClick={()=>handleAppOrUpdate(editindex)}>{isEditing?"Edit":"Add"}</button>
     </li>
   </ul>
   <ul>
  {
    items.map((eachObj,index)=>{
      return(<li  key={index}>
      {eachObj.username}  {eachObj.age}
      <button onClick={()=>handleEditing(index)}>Edit</button>
      <button onClick={()=>handleDelete(index)}>Delete</button>
     </li> )
    })
   }
   </ul>
 
</>
  )
}

export default SampleUseState3
