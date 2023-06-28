import React from 'react'
import Box from '@mui/material/Box';
import { GoogleMap,Marker } from "@react-google-maps/api";
import{getPosition} from "../cards/services/mapApiService.js"
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../users/providers/UserProvider.jsx';
import useMap from '../cards/hooks/useMap.js';
import { Typography } from '@mui/material';

export default function Map(address) {
  const {token}=useUser();
  useEffect(()=>{
    getDataFromAPI(address,token)
  },[])
  const { lat,lng,error, getDataFromAPI }=useMap();

  return (
    <Box>
        {lat?
        <GoogleMap zoom={20} center={{lat:lat, lng: lng}} mapContainerStyle={{width:500,height:500}}>
            <Marker position={{lat:lat,lng:lng}} />
        </GoogleMap>
        :<p>There was an error! {error}</p>}
    </Box>
  )
}
