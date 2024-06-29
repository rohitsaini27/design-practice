import React from 'react'

const Avatar = ({src='', alt='', className='', ...props}) => {
  return (
    <div>
        <img src={src} alt={alt} className='avatar-img'/>
    </div>
  )
}

export default Avatar