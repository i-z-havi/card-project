import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("in the useEffect The counter is " + counter);
    return () => {
      console.log("in the return The counter is " + counter);
      localStorage.setItem("counter", counter);
    };
  }, [counter]);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("every render");

  return (
    <div>
      <Button onClick={handleInc}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
