import React, { useEffect, useState } from "react";
import { Container, Divider, Grid,List, ListItemText,Avatar} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Map from "../../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import { parseAddress } from "../../cards/helpers/map/maphelpers";
import { useUser } from "../providers/UserProvider";
import Spinner from "../../components/Spinner";

export default function Profile() {

  const {handleGetUser}=useUsers()
  const {user}=useUser();
  const [userFullData, SetUserFullData]=useState(null)
  useEffect(() => {
    if (user) {
      const getUser = async () => {
        SetUserFullData(await handleGetUser(user._id));
      };
      getUser();
    }
  }, [user, handleGetUser]);
  
  const key = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const {isLoaded}= useLoadScript({
    googleMapsApiKey: key,
  });

  if(!user) return <Navigate replace to={ROUTES.ROOT}/>

  if (!userFullData||!isLoaded) return <Spinner/>

  console.log(user)
  console.log(userFullData)
  
  return <div>{ 
    <Container sx={{
    paddingTop: 8,
    justifyContent: "center", 
    alignItems: "center"}}>
      <PageHeader title="Profile Page"
      subtitle="Here you can see your profile details"/>
      <Grid container spacing={2} sx={{border:1, borderRadius:"40px", mt:2, boxShadow:10}}>
      <Grid item xs={8}>
        <List>
          <Avatar src={userFullData.image.url} alt={userFullData.image.alt} sx={{width:100, height:100}}/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Name:</ListItemText>
          <ListItemText>{userFullData.name.first} {userFullData.name.middle} {userFullData.name.last}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Phone:</ListItemText>
          <ListItemText>{userFullData.phone}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Email:</ListItemText>
          <ListItemText>{userFullData.email}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Address:</ListItemText>
          <ListItemText>{userFullData.address.houseNumber+" "+userFullData.address.street+", "+userFullData.address.city+", "+userFullData.address.country}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Email:</ListItemText>
          <ListItemText>{userFullData.email}</ListItemText>
          <Divider/>
          {userFullData.isBusiness&&<ListItemText>This user is a business</ListItemText>}
        </List>
      </Grid>
      <Grid item xs={4} md={4}
          sx={{ display: { sm: "none", xs: "none", md:"none", lg:"flex" }, justifyContent: "center", alignItems:"center"}}>
        <Map address={parseAddress(userFullData.address)}/>
      </Grid>
      </Grid>
      
    </Container>}</div>;

}