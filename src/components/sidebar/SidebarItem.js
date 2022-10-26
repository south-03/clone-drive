import React from 'react'

import '../../style/SidebarItem.css'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className='sidebarItem'>
            <div className="sidebarItem__arrow">
                {arrow && (<KeyboardArrowRightIcon />)}
            </div>
            
            <div className='sidebarItem__main'>
                {icon}
                <p>{label}</p>
            </div>
        </div>

    )
}

export default SidebarItem
