import React, { useEffect, useState } from 'react'
import { getNews } from '../../API'
import Loader from '../../Components/Loader/Loader'
import NewsCard from '../../Components/NewsCard/NewsCard'
import './News.css'
import newsbg from '../../Assets/newsimg.jpg'
const News = () => {
    const [news, setNews] = useState(null)
    useEffect(() => {
      getNews(setNews)
    }, [])
    
  return (
    <div className='news_page'>
    <div className="news_banner">
        <img src={newsbg}/>
    <h1 align="center">Latest News</h1>
    </div>
    <div className='news'>
        {news==null?<Loader/>:
        <>
        {news.map((n)=>{
            return (<NewsCard key={n.id} news={n}  /> )
        })}
        </>}
        </div>
    </div>
  )
}

export default News