import { IconButton, Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function AddCardBtn() {

  return (
    <Box sx={{display:'flex',flexDirection:'row-reverse'}}>
    <Link to={ROUTES.CREATE_CARD}>
    <IconButton>
        <AddCircleIcon sx={{fontSize:"40px"}} color='primary'/>
    </IconButton>
    </Link>
    </Box>
  )
}
