import React, { useState } from 'react'

const SampleUseState2 = () => {
    const[data,showData]=useState(false);
    function handlechange(){
       showData(!data)
    }
  return (
    <div>
      <button type="submit" onClick={handlechange}>{data?"Hide":"Show"}</button>
      {data&&<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, harum ducimus...
        </p>} 
    </div>
  )
}

export default SampleUseState2
