import React from 'react'

const AsteroidBelt = ({ text, link,image, title }) => {
    const getCluster=async()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}${link}`)
        // const data = await res.text()
    }
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

                    <button onClick={getCluster} className='asteroid-belt'>Try Yourself</button>
                </div>
            </div>
        </div>
    )
}
export default AsteroidBelt