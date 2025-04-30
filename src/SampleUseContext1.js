import React from 'react';
export const UserContext=React.createContext();
const SampleUseContext1 = ({children}) => {
   const data=[{name:"akhila",age:22}];
  return (
    <div>
      <UserContext.Provider value={data}>
        <h3>hi akhila</h3>
        {children}
     </UserContext.Provider>
    </div>
  )
}
export default SampleUseContext1;
