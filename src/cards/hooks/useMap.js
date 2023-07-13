import axios from 'axios';
import { useState } from 'react';


export default function useMap() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

    const getPosition = (address) => {
        return `${geocodeJson}?address=${address}&key=${key}`;
    }

    const parseAddress = (address) => {
        let parsedAddress = "";
        parsedAddress += address.address.houseNumber + "+" + address.address.street + "+" + address.address.city;
        return parsedAddress;
    }

    const getDataFromAPI = async (address, token) => {
        try {
            delete axios.defaults.headers.common["x-auth-token"];
            const { data } = await axios.get(getPosition(parseAddress(address).replace(' ', "%20")));
            axios.defaults.headers.common["x-auth-token"] = token;
            setData(data);
            setLat(data.results['0'].geometry.location.lat);
            setLng(data.results['0'].geometry.location.lng);
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    };


    return {
        key,
        geocodeJson,
        data,
        error,
        lng,
        lat,
        getDataFromAPI
    }
}
