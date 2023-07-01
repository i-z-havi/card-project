import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { Container, Divider, Grid, Table, TableContainer, TableRow, Typography} from "@mui/material";
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
     <TableContainer>
      <Table>
        <TableRow>
          <Typography variant="h4">Description:</Typography>{value.card.description}
        </TableRow>
        <Divider/>
        <TableRow>
        <Typography variant="h4">Phone Number:</Typography>{value.card.phone}
        </TableRow>
        <Divider/>
        <TableRow>
        <Typography variant="h4">Email:</Typography>{value.card.email}
        </TableRow>
        <Divider/>
        {value.card.web&&
        <div>
        <TableRow>
        <Typography variant="h4">Website Link:</Typography>{value.card.web}
        </TableRow>
        <Divider/>
        </div>
        }
        <TableRow>
        <Typography variant="h4">Address:</Typography>{value.card.address.houseNumber+" "+value.card.address.street+", "+value.card.address.city+", "+value.card.address.country}
        </TableRow>
        <Divider/>
      </Table>
     </TableContainer>
    </Grid>
    <Grid item
          md={4}
          sx={{ display: { sm: "none", xs: "none", md:"block" }, justifyContent: "center" }}>
    <Map key={key} address={value.card.address}/>
    </Grid>
  </Grid>
    :null
  }
    </Container>
  )
}
