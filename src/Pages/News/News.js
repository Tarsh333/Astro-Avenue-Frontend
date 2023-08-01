import React, { useEffect, useState } from 'react'
import { getNews, getstaticCalendarUpcoming } from '../../API'
import Loader from '../../Components/Loader/Loader'
import NewsCard from '../../Components/NewsCard/NewsCard'
import './News.css'
import newsbg from '../../Assets/newsimg.jpg'
import { Link } from 'react-router-dom'
const News = () => {
  const [news, setNews] = useState(null)
  const [calendar, setCalendar] = useState(null)

  useEffect(() => {
    getNews(setNews)
    getstaticCalendarUpcoming(setCalendar)
  }, [])

  return (
    <div className='news_page'>
      <div className="news_banner">
        <img src={newsbg} />
        <h1 align="center">Latest News</h1>
      </div>
      <div className='news-container'>

        <div className='news'>
          {news == null ? <Loader /> :
            <>
              {news.map((n) => {
                return (<NewsCard key={n.id} news={n} />)
              })}
            </>}
        </div>
        <div className='current-events'>
          <h1>Upcoming Events</h1>
          <div className='current-events-container'>

          {calendar&&calendar.map((k) => {
            return (<div>
              <h3>{k.date}</h3>
              <p>{k.title}</p>
            </div>)
          })}
          <Link to="/calendar">View More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News