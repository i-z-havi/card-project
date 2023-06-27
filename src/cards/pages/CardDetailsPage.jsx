import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { Container} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map";
import { useState } from "react";

export default function CardDetailsPage() {
  const key= "AIzaSyBYWQ_bT1b39uMS_iIMCmunhYHtvMiFiac"
  const { id } = useParams();
  const {value,handleGetCard} = useCards();
  useEffect(()=>{
    handleGetCard(id)
  },[])

  const {isLoaded}= useLoadScript({
    googleMapsApiKey: "AIzaSyBYWQ_bT1b39uMS_iIMCmunhYHtvMiFiac",
  });

  return (   
    <Container sx={{
      paddingTop: 8,
      justifyContent: "center", 
      alignItems: "center",
    }}>
    {value.card&&
   <PageHeader title="Card Details"
          subtitle={"This page contains all data for the card "+value.card.address.state}
          />
    }
    {(isLoaded)&&<Map key={key} address={{value}}/>}
    </Container>
  )
}
