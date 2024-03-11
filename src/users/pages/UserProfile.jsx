import React, { useEffect } from "react";
import { Container, Divider, Grid,List, ListItemText,Avatar} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Map from "../../components/Map";
import useMap from "../../cards/hooks/useMap";
import { useLoadScript } from "@react-google-maps/api";

export default function Profile() {

  const {handleGetUser,value}=useUsers()
  const {key}=useMap()
  const {isLoaded}= useLoadScript({
    googleMapsApiKey: key,
  });
  const {isLoading, error, user}=value;
  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  if(!user) return <Navigate replace to={ROUTES.ROOT}/>
  return <div>{(!isLoading&&isLoaded)?    
    <Container sx={{
    paddingTop: 8,
    justifyContent: "center", 
    alignItems: "center"}}>
      <PageHeader title="Profile Page"
      subtitle="Here you can see your profile details"/>
      <Grid container spacing={2} sx={{border:1, borderRadius:"40px", mt:2, boxShadow:10}}>
      <Grid item xs={8}>
        <List>
        <Avatar src={user.image.url} alt="user profile picture" sx={{width:100, height:100}}/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Name:</ListItemText>
          <ListItemText>{user.name.first} {user.name.middle} {user.name.last}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Phone:</ListItemText>
          <ListItemText>{user.phone}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Email:</ListItemText>
          <ListItemText>{user.email}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Address:</ListItemText>
          <ListItemText>{user.address.houseNumber+" "+user.address.street+", "+user.address.city+", "+user.address.country}</ListItemText>
          <Divider/>
          <ListItemText primaryTypographyProps={{fontSize: '40px'}}>Email:</ListItemText>
          <ListItemText>{user.email}</ListItemText>
          <Divider/>
          {user.isBusiness&&<ListItemText>This user is a business</ListItemText>}
        </List>
      </Grid>
      <Grid item xs={4} md={4}
          sx={{ display: { sm: "none", xs: "none", md:"none", lg:"flex" }, justifyContent: "center", alignItems:"center"}}>
        <Map address={user.address}/>
      </Grid>
      </Grid>
      
    </Container>:error}</div>;

}