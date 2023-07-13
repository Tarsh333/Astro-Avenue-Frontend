import React, { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import { Home } from './Pages/Home/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import News from './Pages/News/News'
import Gallery from './Pages/Gallery/Gallery'
import Calendar from './Pages/Calendar/Calendar'
import Image from './Pages/Resources/Image/Image'
import Clustering from './Pages/Resources/Clustering/Clustering'
const App = () => {

  const [auth,setAuth]=useState(false)

  const [token,setToken]=useState("")

  useEffect(()=>{
    if(token){
      setAuth(true)
      data(token)
      localStorage.setItem("auth-token",token);
      
  }
    else setAuth(false)

  },[token])
  
  const data= async (token)=>{
    const res=await fetch('http://localhost:8000/forauthorization',{
      method : "GET",
      headers: {
        Authorization: token,
      },
    })
    console.log(res.data);
  }
  const getToken=(t)=>{
    setToken(t)
  }

  return (
    <Router>
    <Nav tkn={getToken}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {
            auth?
            <>
              <Route path="/news" element={<News/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path="/image-processing" element={<Image/>}/>
              <Route path="/clustering" element={<Clustering/>}/>
            </>
          :null
          }
      </Routes>
    </Router>
  )
}

export default App