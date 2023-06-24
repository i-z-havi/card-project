import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function MyCards() {
  const {user} =useUser();
  const { value, handleGetMyCards, handleDeleteCard } = useCards();
  useEffect(() => {
    handleGetMyCards();
  }, []);

  
  const handleDelete =async(id)=>{
    //this way the cards also re-render 
    await handleDeleteCard(id);
    handleGetMyCards();
  }

  if(!user) return <Navigate replace to={ROUTES.ROOT}/>

  return (
    <div>
      <Container sx={{ mt: 0 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback cards={value.cards} isLoading={value.isLoading} error={value.error} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}
