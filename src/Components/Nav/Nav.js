import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
function NavBar() {
  const location = useLocation()
  const linkk = location.pathname
  return (
    <div className='nav'>
      <div className='nav_left'>Astro Avenue</div>
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
          <Link to="#" className='nav_link' disabled='true'>Resources</Link>
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
      </div>
    </div>
  );
}

export default NavBar;