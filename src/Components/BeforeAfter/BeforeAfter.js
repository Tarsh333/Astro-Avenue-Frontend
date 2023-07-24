import React from 'react'
import './BeforeAfter.css'
const BeforeAfter = ({before,after,id}) => {
  return (
    <div className='before-after' id={id}>
        <div className='before'>
            <h2>Before</h2>
            <img src={before}/>
        </div>
        <div className='after'>
        <h2>After Processing</h2>
            {/* { console.log("modefied:", after) } */}
            <img src={after}/>
        </div>
    </div>
  )
}

export default BeforeAfter