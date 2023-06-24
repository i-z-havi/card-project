import { BottomNavigation, BottomNavigationAction, Box, Button, IconButton, Paper } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Logged from "./Logged";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const {user} = useUser();
  return (
    <Box>
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
      <BottomNavigationAction
          label="Cards"
          icon={<ViewCarouselIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user?<Logged/>:null}
      </BottomNavigation>
    </Paper>
    </Box>
  );
}
