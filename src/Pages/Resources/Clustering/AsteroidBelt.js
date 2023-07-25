import React from 'react'

const AsteroidBelt = ({ text, link,image, title }) => {
    return (
        <div className='card'>
            <h2 align='center'>{title}</h2>
            <div className='card-image'>

                <img src={image} alt={title} />
            </div>
            <div className='card-body'>

                <p>
                    {text}
                </p>
                <div className='card-button-container'>

                    <button onClick={link} className='asteroid-belt'>Try Yourself</button>
                </div>
            </div>
        </div>
    )
}
export default AsteroidBelt