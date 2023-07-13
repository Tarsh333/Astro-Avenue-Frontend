import React from 'react'
import './CalendarCard.css'
const CalendarCard = ({date,title,description}) => {
  const getDate=(date)=>{
    var ans=date.split(",")[0].split(" ")[0].substring(0,3)+"|"+date.split(",")[0].split(" ")[1];
 
    return ans;

  }
  var randomColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'
  return (
    <div className='calendar-card' style={{borderTop:`4px solid ${randomColor}`}}>
            <div className='calendar-card-top'>
                <div className='calendar-card-date' style={{backgroundColor:`${randomColor}`}}>{getDate(date).split("|")[1]}<br></br> {getDate(date).split("|")[0]} </div>
                <div className='calendar-card-title'>{title}</div>
            </div>
            <p>{description}</p>
            

    </div>
  )
}

export default CalendarCard