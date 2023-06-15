import { Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CardsPage() {
  const { cards, isLoading, error, handleGetCards, handleDeleteCard } = useCards();
  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete =async(id)=>{
    //this way the cards also re-render 
    
    await handleDeleteCard(id);
    handleGetCards();
    
  }

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div>
      <Container sx={{
        pt: 8,
      }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback cards={cards} isLoading={isLoading} error={error} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}
