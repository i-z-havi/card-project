import React from 'react'
import { useUser } from '../../users/providers/UserProvider'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from '../../routes/routesModel';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function Logged() {
    const {user}=useUser();
    const navigate=useNavigate();
  return (
    <>
        <BottomNavigationAction 
        label="FavCards"
        icon={<Favorite/>} 
        onClick={()=>navigate(ROUTES.FAV_CARDS)}  
        showLabel={true}
        />

    {user.isBusiness?<BottomNavigationAction label="My Cards" icon={<RecentActorsIcon/>} onClick={()=>navigate(ROUTES.MY_CARDS)} showLabel={true}  />:null}
    </>
  )
}
