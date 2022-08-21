import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
       <div className="logo">
        <h1>Finayo</h1>  
       </div>
       <div className="user_info">
          <Avatar></Avatar> 
          <h2>Afzal Ahmad</h2>
          <h4>mail2afzalahmad@gmail.com</h4>
       </div>
    </div>
  )
}

export default Header