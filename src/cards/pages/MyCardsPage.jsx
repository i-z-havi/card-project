import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { Navigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

export default function MyCards() {
  const {user} =useUser();
  const [searchParams]=useSearchParams();
  const search=searchParams.get("titlesearch");
  const { value, handleGetMyCards, handleDeleteCard } = useCards();
  useEffect(() => {
    handleGetMyCards();
  }, []);
  if(!user) return <Navigate replace to={ROUTES.ROOT}/>
  if(!user.isBusiness||user.isAdmin) return<Navigate replace to={ROUTES.CARDS}/>
  
  const handleDelete =async(id)=>{
    //this way the cards also re-render 
    await handleDeleteCard(id);
    handleGetMyCards();
  }

  const filterCards=(cards,search)=>{
    if (cards===null||search===null) return cards;
    return cards.filter((card)=>card.title.includes(search));
  }



  return (
    <div>
      <Container sx={{ mt: 0 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />  
        <CardsFeedback cards={filterCards(value.cards,search)} isLoading={value.isLoading} error={value.error} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}
