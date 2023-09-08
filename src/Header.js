import React, { useState } from 'react'

import './css/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';

const Header = () => {

    const [inputSearch, setInputSearch] = useState('')

    return (
        <div className='header'>

            {/* left */}
            <div className="header-left">
                <MenuIcon />

                <Link to={'/'}> <img className='header-logo'
                    src="/images/youtube-logo.jpeg" alt="" />
                </Link>


            </div>

            {/* middle */}
            <div className="header-input"
            ><input

                    type="text"

                    value={inputSearch}
                    placeholder='Search'
                    onChange={(e) => { setInputSearch(e.target.value) }}

                />

                {/* directs us to whatever we type in the search input */}
                <Link to={`/search/${inputSearch}`}><SearchIcon className='header-inputbutton' /></Link>


            </div>

            {/* right */}
            <div className="header-icons">
                <VideoCallIcon className='header-icon' />
                <AppsIcon className='header-icon' />
                <NotificationsIcon className='header-icon' />
                <Avatar alt="haleem " src="/images/haleem-logo.jpeg" />
            </div>



        </div>
    );
}

export default Header 