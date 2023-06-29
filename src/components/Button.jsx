import React from 'react';
import "./components.css";

const Button = ({text,click}) => {
  return (
    <button onClick={click} className='submitBtn'>{text}</button>
    
  )
}

export default Button