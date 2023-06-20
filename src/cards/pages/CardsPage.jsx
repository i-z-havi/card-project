import { Container} from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useSearchParams } from "react-router-dom";

export default function CardsPage() {
  const { cards, isLoading, error, handleGetCards, handleDeleteCard } = useCards();
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
        <CardsFeedback cards={filterCards(cards,search)} isLoading={isLoading} error={error} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}
