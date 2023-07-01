import { IconButton, Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { useUser } from '../../users/providers/UserProvider';

export default function AddCardBtn() {
  const {user}=useUser();

  return (
    <Box sx={{position:"fixed",right:0,bottom:'10%'}}>
      {(user.isAdmin||user.isBusiness)&&
    <Link to={ROUTES.CREATE_CARD}>
    <IconButton>
        <AddCircleIcon sx={{fontSize:"40px"}} color='primary'/>
    </IconButton>
    </Link>
    }
    </Box>
  )
}
