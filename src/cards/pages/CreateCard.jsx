import React from 'react'
import { Container } from "@mui/material";
import { useUser } from '../../users/providers/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'
import useForm from '../../forms/hooks/useForm'
import initialCardForm from '../helpers/initialforms/initialCardForm'
import cardSchema from '../models/joi-schema/cardSchema'
import useCards from '../hooks/useCards'
import CardForm from '../components/CardForm';

export default function CreateCard() {
  const {user}=useUser()
  const {handleCreateCard}=useCards();
  const {value,...rest}=useForm(
    initialCardForm,
    cardSchema,
    handleCreateCard
  )
  if (!user) return <Navigate replace to={ROUTES.CARDS}/>
  
  

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
      onSubmit={rest.onSubmit}
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
