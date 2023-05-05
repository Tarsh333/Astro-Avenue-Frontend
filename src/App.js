import React from 'react'
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
  return (
    <Router>
    <Nav />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/image-processing" element={<Image/>}/>
          <Route path="/clustering" element={<Clustering/>}/>
          
      </Routes>
    </Router>
  )
}

export default App