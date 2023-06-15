import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Country() {
  const [myCountry, setMyCountry] = useState();
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);
      setMyCountry(data[82].currentCountry.name.common);
    } catch (err) {
      console.log(err.message);
    }
  };

  return <div>{myCountry}</div>;
}
