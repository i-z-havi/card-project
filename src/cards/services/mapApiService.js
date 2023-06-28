import axios from "axios";
import useAxios from "../../hooks/useAxios";


export const key= "AIzaSyBYWQ_bT1b39uMS_iIMCmunhYHtvMiFiac";
export const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';
export const getPosition=(address)=>{
    return `${geocodeJson}?address=${address}&key=${key}`;
}

export const geocodingQuery = (address) => {
    const geocoderQuery = encodeURIComponent(`${address}`.replace(/ /g, '+'))
    return axios.get(`${geocodeJson}?address=${geocoderQuery}&key=${key}`)
      .then(res => res.data)
      .then(json => {
        if (json.results.length === 0) {
          return null
        }
        let lat = json.results['0'].geometry.location.lat
        let lng = json.results['0'].geometry.location.lng
        return {lat, lng}
      })
  }


