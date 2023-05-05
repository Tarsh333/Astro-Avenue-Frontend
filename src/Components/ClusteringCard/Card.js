import React from 'react'
import './Card.css'
const Card = ({text,link1,link2,link3,image,title}) => {
  return (
    <div className='card'>
        <h2 align='center'>{title}</h2>
        <div className='card-image'>

        <img src={image} alt={title}/>
        </div>
        <div className='card-body'>

        <p>
            {text}
        </p>
        <div className='card-button-container'>

        <button onClick={link1}>Use Dataset 1</button>
        <button onClick={link2}>Use Dataset 2</button>
        <button onClick={link3}>Use Dataset 3</button>
        </div>
        </div>
    </div>
  )
}

export default Card