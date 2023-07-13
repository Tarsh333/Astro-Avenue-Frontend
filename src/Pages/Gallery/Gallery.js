import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Loader from '../../Components/Loader/Loader'
import { getimod, search } from '../../API'
import galleryimg from '../../Assets/galleryimg.jpg'
const Gallery = () => {
  const [imod, setimod] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [currDate, setCurrDate] = useState(new Date().toISOString().slice(0, 10))
  function getPreviousDay(date) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous.toISOString().slice(0, 10);
  }
  function getNextDay(date) {
    const next = new Date(date.getTime());
    next.setDate(date.getDate() + 1);

    return next.toISOString().slice(0, 10);
  }
  useEffect(() => {
    if (currDate == new Date().toISOString().slice(0, 10)) {
      setDisabled(true)
    }
    else { setDisabled(false) }
    getimod(currDate, setimod)
  }, [currDate])

  const prev = () => {
    setCurrDate((p) => getPreviousDay(new Date(p)))
  }
  const next = () => {

    setCurrDate((p) => getNextDay(new Date(p)))

  }

  return (
    <div className="gallery">
      <div className="gallery_banner">
        <img src={galleryimg} alt="Gallery Banner" />
        <h1 align="center">NASA Image Of The Day</h1>
      </div>
      <div className='imod'>
        <button onClick={prev}>&#8249;</button>
        {imod == null ? <div className='loader_container'><Loader /></div>
          :
          <div className='imod_container'>
            <img src={imod.url} alt="Pic of The Day" />
            <div className='text'>
              <p>{imod.explanation}</p>
            </div>
            <p className='date'>Date: {imod.date}</p>
          </div>}

        <button disabled={disabled} onClick={next}>&#8250;</button>
      </div>

    </div>
  )
}

export default Gallery