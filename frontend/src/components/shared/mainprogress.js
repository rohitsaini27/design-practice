import React from 'react'

const MainProgress = ({percent, background}) => {
  return (
    <div className='mainprogress'>
        <div className='mainprogress-bar' style={{width: `${percent}%`, background: background}}></div>
    </div>
  )
}

export default MainProgress