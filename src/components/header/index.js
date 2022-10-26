import React from 'react'

import Logo from '../../media/cloud-data.png'
import '../../style/Header.css'

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const index = ({userPhoto}) => {
  return (
    <div className='header'>
        <div className="header__logo">
            <img src={Logo} alt="" />
            <span>Cloud</span>
        </div>
        <div className="header__searchContainer">
            <div className="header__searchBar">
            <SearchIcon/>
            <input type="text" placeholder='Search'/>
            <ExpandMoreIcon/>
            </div>

        </div>
        <div className="header__icons">
          <span>
            <SettingsIcon/>
            <HelpOutlineIcon/>
          </span>

          <img src={userPhoto} alt=" " />
        </div>
    </div>
  )
}

export default index