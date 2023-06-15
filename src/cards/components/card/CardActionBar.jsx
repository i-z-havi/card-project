import { Box, CardActions, IconButton, Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

export default function CardActionBar({
  id,
  userid,
  handleDelete,
  handleLike,
  handleEdit,
}) {
  
  const {user}=useUser();
  const displayEdit=()=>{
  if(!!user){

    //why is it read as .id if its saved as user_id?
    if ((String(userid)===String(user.id))||user.isAdmin) {
      return true
    }
  }
    return false
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("test")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {displayEdit()?
          <Box>
          <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
           <ModeEditIcon />
          </IconButton>
          <IconButton aria-label="Delete Card" onClick={() => handleClickOpen()}>
            <DeleteIcon />
          </IconButton>
          </Box>
          :null
        }
        </Box>
        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user&& <IconButton aria-label="Add to favorite" onClick={() => handleLike(id)}>
            <FavoriteIcon />
          </IconButton>
        }
        </Box>
      </CardActions>

      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Card?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete the card? This can not be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Disagree</Button>
          <Button onClick={()=>handleDelete(id)} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

CardActionBar.propTypes = {
  id: string,
  handleDelete: func,
  handleLike: func,
  handleEdit: func,
};
