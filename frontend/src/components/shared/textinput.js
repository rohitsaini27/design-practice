import React from 'react'

const TextIput = ({ id='', type='', onChange =() => {},value={}, disabled=false, className="", ...props}) => {
  return (
    <>
    <input 
        disabled={disabled}
        type={type || "text"}
        name=''
        value={value}
        onChange={onChange}
        className='textinput'
        {...props}
    />
    </>
  )
}

export default TextIput