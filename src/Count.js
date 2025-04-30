import React from 'react';
const Count = ({title,number}) => {
    console.log(`${title} value redenered`);
  return (
   
    <div>
      <h4>{title} value: {number}</h4>
    </div>
  )
}

export default React.memo(Count);
