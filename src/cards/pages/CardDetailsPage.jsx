import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { Container, Divider, Grid,List, ListItemText,Box} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useLoadScript } from "@react-google-maps/api";
import Map from "../../components/Map";
import useMap from "../hooks/useMap";


export default function CardDetailsPage() {
  const {value,handleGetCard} = useCards();
  const { id } = useParams();
  useEffect(()=>{
    handleGetCard(id)
  },[])
  const {key}=useMap();
  const {isLoaded}= useLoadScript({
    googleMapsApiKey: key,
  });
  const setCapital=(word)=>{
    return word=word.charAt(0).toUpperCase()+word.slice(1);
  }


  if(!value.card) return<div>loading...</div>
  return (   
    <Container sx={{
      paddingTop: 8,
      justifyContent: "center", 
      alignItems: "center",
    }}>
         <PageHeader title={value.card?setCapital(value.card.title):"Title"}
          subtitle={value.card?setCapital(value.card.subtitle):"Subtitle"}
          />
  {(value.card&&isLoaded)?
  <Grid container spacing={2}> 
    <Grid item xs={8}>
      <List>
        <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Description:</ListItemText>
        <ListItemText>{value.card.description}</ListItemText>
        <Divider/>
        <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Phone Number:</ListItemText>
        <ListItemText>{value.card.phone}</ListItemText>
        <Divider/>
        <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Email:</ListItemText>
        <ListItemText>{value.card.email}</ListItemText>
        <Divider/>
        {value.card.web&&<Box><ListItemText primaryTypographyProps={{fontSize: '40px'}}>Website:</ListItemText>
        <ListItemText>{value.card.web}</ListItemText><Divider/></Box>}
        <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Address:</ListItemText>
        <ListItemText>{value.card.address.houseNumber+" "+value.card.address.street+", "+value.card.address.city+", "+value.card.address.country}</ListItemText>
      </List>
    </Grid>
    <Grid item
          md={4}
          sx={{ display: { sm: "none", xs: "none", md:"flex" }, justifyContent: "center", alignItems:"center"}}>
    <Map key={key} address={value.card.address}/>
    </Grid>
  </Grid>
    :null
  }
    </Container>
  )
}
  