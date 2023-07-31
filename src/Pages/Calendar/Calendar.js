import React, { useEffect, useState } from 'react'
import { getCalendar } from '../../API'
import { getstaticCalendar } from '../../API'
import CalendarCard from '../../Components/CalendarCard.js/CalendarCard'
import Loader from '../../Components/Loader/Loader'
import './Calendar.css'

const Calendar = () => {
    const [calendar, setCalendar] = useState(null)
    useEffect(() => {
     getCalendar(setCalendar)
    }, [])
    const [staticcalendar, setstaticCalendar] = useState(null)
    useEffect(() => {
     getstaticCalendar(setstaticCalendar)
    }, [])
    
  return (
    <div className='calendar'>
      <div className="calendar_banner">
        <img src="https://viewspace.org/assets/banners/banner-about-interactives-1c1975f90c2b38fb1e434b1e3e9fd33919c53c08f020028b26694a23461e11ff.jpg" alt="Gallery Banner" />
        <h1 align="center">Astronomical Events</h1>
      </div>
      <div className='calendar_card_container'>

        {staticcalendar==null?<Loader/>:staticcalendar.map((d)=>{
          return (<CalendarCard date={d.date} title={d.title} description={d.description}></CalendarCard>)
        })}
        
        </div>
    </div>
  )
}

export default Calendar