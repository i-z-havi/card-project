import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { Container} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map";
import { useState } from "react";
import {key} from "../services/mapApiService.js";

export default function CardDetailsPage() {
  const {value,handleGetCard} = useCards();
  const { id } = useParams();
  useEffect(()=>{
    handleGetCard(id)

  },[])
  const {isLoaded}= useLoadScript({
    googleMapsApiKey: key,
  });


  if(!value.card) return<div>loading...</div>
  return (   
    <Container sx={{
      paddingTop: 8,
      justifyContent: "center", 
      alignItems: "center",
    }}>
  {(value.card&&isLoaded)?
  <div>
   <PageHeader title="Card Details"
          subtitle={"This page contains all data for the card "+value.card.address}
          />
    <Map key={key} address={value.card.address}/>
    </div>:null
  }
    </Container>
  )
}
