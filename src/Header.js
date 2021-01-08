import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar , IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps'; 
import  { useDispatch, useSelector } from "react-redux";
import  { logout, selectUser} from "./features/userSlice.js"
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () =>{
        auth.signOut().then(() =>{
        dispatch(logout());
    });
}
    return (
        <div className="header">
          
          <div className="header_left">
          <IconButton>
          
           <MenuIcon/>
          </IconButton>
          <img src="https://media5.picsearch.com/is?zmmRPC0EvMjKMMGESVhUpBTrK1E4ijn7yddG5CixSnM&height=255" alt=""/>

        </div>

        <div className="header_middle">
            <SearchIcon/>
            <input placeholder="Search mail" type="text" />
            <ArrowDropDownIcon className="header_inputcaret"/>
        </div>
  <div className="header_Right">
     
      <IconButton>
     <AppsIcon/>
      </IconButton>
      <IconButton>
     <NotificationsIcon/>
      </IconButton>
      <Avatar onClick={signOut} src={user?.photoUrl}/>

      
  </div>

        </div>
    )
}

export default Header;
