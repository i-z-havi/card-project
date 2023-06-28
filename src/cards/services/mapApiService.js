export const key= "AIzaSyBYWQ_bT1b39uMS_iIMCmunhYHtvMiFiac";
export const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';
export const getPosition=(address)=>{
    return `${geocodeJson}?address=${address}&key=${key}`;
}


