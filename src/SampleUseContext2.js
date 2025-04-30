import React from 'react';
import {useContext} from "react";
import {UserContext} from "./SampleUseContext1.js";
const SampleUseContext2 = () => {
    const [{name,age}]=useContext(UserContext);
    console.log(name);
  return (
    <div>
     <h1>{name}</h1> 
     <h1>{age}</h1>
    </div>
  );
};

export default SampleUseContext2
