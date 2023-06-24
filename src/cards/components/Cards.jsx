import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import BusinessCard from "./card/BusinessCard";
import cardType from "../models/types/cardType";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";

export default function Cards({ cards, handleDelete }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const {user}=useUser();
  const {handleLikeCard}=useCards();

  const isLiked=(card)=>{
    if(!user) return false;
    if(!card.likes) return false;
    if (user) return (card.likes.includes(user.id));
    return false;
  }

  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLikeCard}
              handleEdit={handleEdit}
              isLiked={isLiked(card)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
