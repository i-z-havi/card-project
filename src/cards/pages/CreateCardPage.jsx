import React from 'react'
import { Container } from "@mui/material";
import { useUser } from '../../users/providers/UserProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'
import useForm from '../../forms/hooks/useForm'
import cardSchema from '../models/joi-schema/cardSchema'
import useCards from '../hooks/useCards'
import CardForm from '../components/CardForm';
import initialCardForm from '../helpers/initialforms/initialCardForm';

export default function CreateCard() {
  const navigate =useNavigate();
  const {user}=useUser()
  const {handleCreateCard}=useCards();
  const {value,...rest}=useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  )
  const handleSubmit=()=>{
    rest.onSubmit();
    navigate(ROUTES.CARDS)
  }
  if (!user) return <Navigate replace to={ROUTES.CARDS}/>
  if(!user.isBusiness||user.isAdmin) return<Navigate replace to={ROUTES.CARDS}/>
  

  return (
    <Container
    sx={{
      paddingTop: 8,
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
    }}
  >
    <CardForm
      onSubmit={handleSubmit}
      onReset={rest.handleReset}
      onFormChange={rest.validateForm}
      title="Create Card"
      errors={value.errors}
      data={value.data}
      onInputChange={rest.handleChange}
      setData={rest.setData}
    />
  </Container>
  )
}
