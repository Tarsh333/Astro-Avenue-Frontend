import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
import {auth,provider} from "../../Pages/Login/config";
import {signInWithPopup} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import App from '.././App'
function NavBar(props) {
  const [token,setToken]=useState('')
  // const [auth,setAuth]=useState(false)
  const location = useLocation()
  const linkk = location.pathname
  const Navigate=useNavigate()
    const [value,setValue] = useState('')
    const call= async (token)=>{
      const res=await fetch('http://localhost:8000/forauthorization',{
        method : "GET",
        headers: {
          Authorization: token,
        },
      })
      console.log(res.data);
    }
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
          console.log(data);
            setToken(data.user.accessToken)
            setValue(data.user.email)
            props.tkn(data.user.accessToken)
            // setAuth(true)
            // localStorage.setItem("auth",true)
            localStorage.setItem("email",data.user.email)
            localStorage.setItem('exp',data.user.stsTokenManager.expirationTime)
            call(data.user.accessToken);
        })
    }

    const logout =()=>{
      localStorage.clear()
      props.tkn("")
      Navigate('/')
      window.location.reload()
  }
    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // },[])


  return (
    <div className='nav'>
      <div className='nav_left'>Astro Avenue</div>
      {props.auth  ?
      <div className='nav_right'>
        <div className={linkk === '/' ? 'selected link' : 'link'}>
          <Link to="/" className='nav_link'>Home</Link>
        </div>
        <div className={linkk === '/news' ? 'selected link' : 'link'}>
          <Link to="/news"  className='nav_link'>News</Link>
        </div>
        <div className={linkk === '/gallery' ? 'selected link' : 'link'}>
          <Link to="/gallery"  className='nav_link'>Gallery</Link>
        </div>
        <div className={linkk === '/resources' ? 'selected link' : 'link'} id="resources">
          <Link to="#" className='nav_link' disabled={true}>Resources</Link>
          <div className='dropdown'>
          <Link to="/image-processing">Image Processing</Link>
          <hr/>
          <Link to="/clustering">Data Clustering</Link>
          <hr/>
          <Link to="/papers">Research Papers</Link>
          <hr/>
          </div>
        </div>
        <div className={linkk === '/calendar' ? 'selected link' : 'link'}>
          <Link to="/calendar"  className='nav_link'>Calendar</Link>
        </div>
          <button className="logout" onClick={logout} > Logout </button>
        
      </div>: <button className="login" onClick={handleClick} >Login</button>
      }
    </div>
  );
}

export default NavBar;