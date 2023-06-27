import React from 'react'
import{GoogleMap,useLoadScript,Marker} from '@react-google-maps/api'
import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Map from '../../components/Map';

export default function Maptest() {
    const {isLoaded}=useLoadScript({
        googleMapsApiKey: "AIzaSyBYWQ_bT1b39uMS_iIMCmunhYHtvMiFiac",
    })

    if (!isLoaded) return<div>Loading...</div>
  return <Map/>;
  }

