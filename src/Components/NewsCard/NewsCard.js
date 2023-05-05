import React from 'react'
import './NewsCard.css'
const NewsCard = (news) => {
    const { title, imageUrl, summary, url } = news.news
    return (
        <div className='news_card'>
            <img src={imageUrl != null ? imageUrl : "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/1-bluemarble_west.jpg?itok=hRooa_1o"} alt="Some Related Image" />
            <h3>{title}</h3>
            <p>{summary}</p>
            <a href={url} target='_blank'>Read More</a>
        </div>
    )
}

export default NewsCard