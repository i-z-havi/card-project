import React from 'react'
import { Box } from "@mui/material";
import NavItem from '../../../../routes/components/NavItem';
import ROUTES from '../../../../routes/routesModel';

export default function NotLogged() {
  return (
    <Box sx={{display:'inline-flex'}}>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <NavItem to={ROUTES.LOGIN} label="Login"  />
      <NavItem to={ROUTES.SIGNUP} label="Sign up" />
      </Box>  
    </Box>
  )
}
