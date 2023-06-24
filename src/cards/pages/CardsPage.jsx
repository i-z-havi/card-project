import { Container} from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useSearchParams } from "react-router-dom";
import AddCardBtn from "../components/AddCardBtn";
import { useUser } from "../../users/providers/UserProvider";

export default function CardsPage() {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const {user}=useUser();
  const [searchParams]=useSearchParams();
  const search=searchParams.get("titlesearch")
  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete =async(id)=>{
    await handleDeleteCard(id);
    handleGetCards();
  }

  const filterCards=(cards,search)=>{
    if (cards===null||search===null) return cards;
    return cards.filter((card)=>card.title.includes(search));
  }

  return (
    <div>
      <Container sx={{
        pt: 8,
        
      }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback cards={filterCards(value.cards,search)} isLoading={value.isLoading} error={value.error} handleDelete={handleDelete} />
      </Container>
      {user&&<AddCardBtn/>}
    </div>
  );
}
