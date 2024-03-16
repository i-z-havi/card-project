import axios from 'axios';
import { useCallback, useState } from 'react';
import { getPosition } from '../helpers/map/maphelpers';

export default function useMap() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    const getDataFromAPI = useCallback( async (address, token) => {
        try {
            delete axios.defaults.headers.common["Authorization"];
            const { data } = await axios.get(getPosition(address));
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            setData(data);
            setLat(data.results['0'].geometry.location.lat);
            setLng(data.results['0'].geometry.location.lng);
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    },[]);


    return {
        data,
        error,
        lng,
        lat,
        getDataFromAPI
    }
}
