import React,{useState} from "react";
function SampleUseState(){
    const [count,setCount]=useState(0);
    const incrementCount=()=>{
         setCount(count+1);
    }
    const decrementCount=()=>{
        setCount(count-1);
   }
    return(<section>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>
        </section>);
}
export default SampleUseState;