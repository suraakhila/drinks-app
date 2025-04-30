import React from 'react'

const Button = ({title,handler}) => {
    console.log(`button ${title} redenered`)
  return (
    <div>
      <button onClick={handler}>Increment {title}</button>
    </div>
  )
}

export default React.memo(Button);
