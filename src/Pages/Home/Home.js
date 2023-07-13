import React, { useEffect, useState } from 'react'
import './Home.css'
import bg from '../../Assets/bg.jpg'
import { getCluster } from '../../API'
export const Home = () => {
  // useEffect(() => {
  //   getCluster(setCluster)
  // }, [])
  const [cluster, setCluster] = useState(null)
  return (
    <div className='home'>
      {cluster ? <div dangerouslySetInnerHTML={cluster}></div> : <><img src={bg} alt="bkwr" />
        <div className='home_banner'>
          <h1 align="center" className='home_title'>ASTRO AVENUE</h1>
          <h1 align="center" className='home_sub_title'>See the universe in a new light</h1>
        </div></>}
    </div>
  )
}
