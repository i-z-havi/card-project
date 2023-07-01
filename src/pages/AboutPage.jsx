import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
          This application was built in order to offer businesses an easy and dynamic way to <del>give me places to rob</del> 
          allow businesses to share their business cards online! In addition, it allows businesses to <del>gather information on their enemies</del>
          easily keep track of other businesses, allowing <del>corporate espionage</del> productive collaborations to become easier then ever before!
          Don't delay, <del>give me your location</del> make a card today!
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
