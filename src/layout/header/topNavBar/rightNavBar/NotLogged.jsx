import React from 'react'
import { Box } from "@mui/material";
import NavItem from '../../../../routes/components/NavItem';
import ROUTES from '../../../../routes/routesModel';
import MoreButton from './MoreButton';

export default function NotLogged() {
  return (
    <Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <NavItem to={ROUTES.LOGIN} label="Login"  />
      <NavItem to={ROUTES.SIGNUP} label="Sign up" />
      </Box>
      <MoreButton/>
    </Box>
  )
}
