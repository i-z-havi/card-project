import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import NotLogged from "./NotLogged";

export default function RightNavigation() {
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();
  return (
    <Box sx={{ display: { md: "inline-flex" } }}>
      
      <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {user ? <Logged /> : <NotLogged />}
    </Box>
  );
}