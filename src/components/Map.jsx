import React from 'react'
import Box from '@mui/material/Box';
import { GoogleMap,Marker } from "@react-google-maps/api";

export default function Map(key,state) {
    const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';
    // const url = `${geocodeJson}?key=${key}&latlng=${lat},${lng}`;
    const position=`${geocodeJson}?address=&key=${key}`
    console.log(state)
  return (
    <Box>
        <GoogleMap zoom={10} center={{lat:40, lng:30}} mapContainerStyle={{width:500,height:500}}>
            <Marker position={{lat:40,lng:30}} />
        </GoogleMap>
    </Box>
  )
}
