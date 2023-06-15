import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Countires() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);
      setCountries(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      {countries
      //? means only if there is a country
      //due to axios getting the countries taking time,
      //we must use ?
      //because countries are usestates, they will get updated
      //at the end of the sync
        ? countries.map((country) => (
            <Box
              display="flex"
              sx={{ justifyContent: "space-between" }}
              key={JSON.stringify(country)}
            >
              <Avatar
                src={country.flags.png}
                alt={`${country.name.common} flag`}
              />
              <Typography sx={{ width: "150px" }}>
                {country.name.common}
              </Typography>
              <Typography sx={{ width: "150px" }}>
                {country.capital?.[0]}
              </Typography>
            </Box>
          ))
          //if there ISNT a country, the function will run everything
          //that is after the :
        : null}
    </div>
  );
}

//conditional rendering
//condition ? return if true : return if false
