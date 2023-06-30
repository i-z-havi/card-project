import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";

export default function LeftNavigation() {
  const {user}=useUser();
  return <Box>
    <LogoIcon />
    <Box sx={{
      display: { sm: "none",xs:"none", md: "inline-flex" },
    }}
>
      
      <Logo />
      <Box sx={{pt:1}}>
      <NavItem to={ROUTES.CARDS} label="Cards"  /> 
      <NavItem to={ROUTES.ABOUT} label="About" /> 
      </Box>
      {user?<Logged/>:null}
      
    </Box>
</Box>

}
