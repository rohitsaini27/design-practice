import React from 'react'

const TextInput = ({ id="", type="", disabled=false, value={}, onChange=()=>{},placeholder='', className="", ...props}) => {
  return (
    <>
    <input 
        disabled={disabled}
        value={value}
        onChange={onChange}
        type={type || "text"}
        id={id}
        placeholder={placeholder}
        className='textinput'
        {...props}
    />
    </>
  )
}

export default TextInput