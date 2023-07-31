import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Loader from '../../Components/Loader/Loader'
import { getImages, getimod, search } from '../../API'
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
  const [images, setImages] = useState([])
  useEffect(() => {
    getImages(setImages)
  }, [])


  return (
    <div className="gallery">
      <div className="gallery_banner">
        <img src={galleryimg} alt="Gallery Banner" />
        <h1 align="center">Gallery</h1>
      </div>
        <h1 align="center" className='imod-h1'>NASA Image Of The Day</h1>
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
      <hr/>
      <div className='images-card'>
      <h1 align='center'>Your Images</h1>

        {images.map((i) => {
          return (
            <div className={i.feature!="PC"?'small-div':"abc"}>
              {console.log(i.feature)}
              {i.feature!="PC"&&<img src={i.original_img} className='small-image'/>}<img src={i.modified_img} className={i.feature!="PC"?'small-image':'abc'}/>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Gallery