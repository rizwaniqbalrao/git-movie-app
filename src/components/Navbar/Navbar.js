import React, { useContext } from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import movieContext from '../../context/Movie/movieContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

const Navbar = () => {
    const context = useContext(movieContext)
    const { searchData, newSerachData, searchBarShow, setSearchBarShowOnNav, isAuthenticated, handleOnChange } = context
    const signOutClick = () => {
        handleOnChange(false)
    }
    return (
        <div className='navbar'>
            <div className="logo"><MenuIcon />Sony Pictures</div>
            <ul className="nav-lists">
                <li ><Link to="/explore" className="nav-links" onClick={setSearchBarShowOnNav}>Explore</Link></li>
                <li ><Link to="/movieslist" className="nav-links" onClick={setSearchBarShowOnNav}>Movies List</Link></li>
                <li ><Link to="/explore" className="nav-links">Television</Link></li>
                <li ><Link to="/explore" className="nav-links">Careers</Link></li>

            </ul>
            <div className="mui-list">
                <FacebookIcon className='mui-icon' />
                <LinkedInIcon className='mui-icon' />
                <TwitterIcon className='mui-icon' />
                <InstagramIcon className='mui-icon' />
                <YouTubeIcon className='mui-icon' />
            </div>
            {searchBarShow ? "" : <div className='input'> <input type="search" placeholder="Search Movie" value={searchData} onChange={(e) => newSerachData(e.target.value)} /></div>}
            {isAuthenticated ? <Button onClick={signOutClick} variant="primary">Sign Out</Button> : ''}
        </div>
    )
}

export default Navbar