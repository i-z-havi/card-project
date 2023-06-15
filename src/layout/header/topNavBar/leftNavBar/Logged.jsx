import React from 'react'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'
import { useUser } from '../../../../users/providers/UserProvider';
import {Box} from '@mui/material'

export default function Logged() {
    const {user}=useUser();
  return (
    <Box>
    <NavItem to={ROUTES.FAV_CARDS} label='Fav Cards'/>
    {user.isBusiness?<NavItem to={ROUTES.MY_CARDS} label='My Cards'/>:null}
    {user.isAdmin?<NavItem to={ROUTES.SANDBOX} label="Sandbox"/>:null}
    </Box>
  )
}
