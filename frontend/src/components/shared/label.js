import React from 'react'

const Label = ({title= "", ...props}) => {
  return (
    <>
    <label className='label'>{title}</label>
    </>
  )
}

export default Label