import { Button } from "@mui/material";
import React from "react";
import { memo } from "react";

export default memo(function MyButton({ label, func }) {
  console.log("My Button " + label.data + "is redered");
  return (
    <Button variant="contained" onClick={func}>
      {label.data}
    </Button>
  );
});
