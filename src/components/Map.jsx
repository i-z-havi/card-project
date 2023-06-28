import React from 'react'
import Box from '@mui/material/Box';
import { GoogleMap,Marker } from "@react-google-maps/api";
import{key, geocodeJson,getPosition,geocodingQuery} from "../cards/services/mapApiService.js"
import { useEffect } from 'react';
import axios from 'axios';
import useAxios from '../hooks/useAxios.js';
import { useState } from 'react';
import { useUser } from '../users/providers/UserProvider.jsx';

export default function Map(address) {
  // results['0'].geometry.location.lat
  // results['0'].geometry.location.lng
  const {token}=useUser();
  useEffect(()=>{
    getDataFromAPI();
  },[])

  const [data,setData]=useState();

  const getDataFromAPI = async () => {
    try {
      delete axios.defaults.headers.common["x-auth-token"];
      const { data } = await axios.get(getPosition(parseAddress(address).replace(' ',"%20")));
      axios.defaults.headers.common["x-auth-token"] = token;
      console.log(data.results);
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

    const parseAddress=(address)=>{
      let parsedAddress="";
      parsedAddress+=address.address.houseNumber+"+"+address.address.street+"+"+address.address.city;
      return parsedAddress;
    }
  return (
    <Box>
        {data?
        <GoogleMap zoom={20} center={{lat:data.results['0'].geometry.location.lat, lng:data.results['0'].geometry.location.lng}} mapContainerStyle={{width:500,height:500}}>
            <Marker position={{lat:data.results['0'].geometry.location.lat,lng:data.results['0'].geometry.location.lng}} />
        </GoogleMap>
        :null}
    </Box>
  )
}
