import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import useUsers from "../../../../users/hooks/useUsers";
import { useMenu } from "../menu/MenuProvider";
import Menu from "../menu/Menu";
import MoreButton from "./MoreButton";

export default function Logged() {
  const { handleLogout } = useUsers();
  const setOpen =useMenu();
  return (
    <Box >
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }} onClick={setOpen}>
          <Avatar alt="Bird" src="/assets/images/businessavatar.png"/>
        </IconButton>
      </Tooltip>
      <Menu/>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={handleLogout}
      >
        <LogoutIcon />
      </IconButton>
      </Box>
      <MoreButton/>
    </Box>
    
  );
}