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
  return (
    <Box sx={{
      display: { xs: "none", md: "inline-flex" },
    }}
>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label="Cards" /> 
      <NavItem to={ROUTES.ABOUT} label="About" /> 
      {user?<Logged/>:null}
    </Box>
  );
}
