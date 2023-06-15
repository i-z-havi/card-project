import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavigation from "./leftNavBar/LeftNavigation";
import RightNavigation from "./rightNavBar/RightNavigation";

export default function NavBar() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />
        <RightNavigation />
      </Toolbar>
    </AppBar>
  );
}