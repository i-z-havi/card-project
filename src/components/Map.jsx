import React from 'react'
import Box from '@mui/material/Box';
import { GoogleMap,Marker } from "@react-google-maps/api";
import { useEffect } from 'react';
import { useUser } from '../users/providers/UserProvider.jsx';
import useMap from '../cards/hooks/useMap.js';

export default function Map(address) {
  const {token}=useUser();
  const { lat,lng,error, getDataFromAPI }=useMap();
  useEffect(()=>{
    getDataFromAPI(address,token)
  },[address,getDataFromAPI,token])

  return (
    <Box>
        {lat?
        <GoogleMap zoom={18} center={{lat:lat, lng: lng}} mapContainerStyle={{width:320,height:320}}>
            <Marker position={{lat:lat,lng:lng}} />
        </GoogleMap>
        :<p>{error}</p>}
    </Box>
  )
}
