import React from 'react'

import '../../style/Sidebar.css'

import NewFile from './NewFile'
import SidebarItem from './SidebarItem';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DevicesIcon from '@mui/icons-material/Devices';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StorageIcon from '@mui/icons-material/Storage';


const index = () => {
  return (
    <div className='sideBar'>
        <NewFile/>

        <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow icon={(<DevicesIcon />)} label={'Computers'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} />
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} />
                
                <hr/>
                
                <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />

        </div>
    </div>
  )
}

export default index