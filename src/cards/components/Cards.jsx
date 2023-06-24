import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import BusinessCard from "./card/BusinessCard";
import cardType from "../models/types/cardType";

export default function Cards({ cards, handleDelete }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const handleLike = (id) => {
    console.log(`Card ${id} is Liked`);
  };

  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BusinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleEdit={handleEdit}
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
