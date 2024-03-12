const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

const getPosition = (address) => {
    return `${geocodeJson}?address=${address}&key=${key}`;
}

const parseAddress = (address) => {
    console.log(address)
    let parsedAddress = "";
    parsedAddress += address.houseNumber + "+" + address.street + "+" + address.city
    parsedAddress = parsedAddress.replace(' ', "%20");
    return parsedAddress;
}


export {getPosition, parseAddress, key, geocodeJson}