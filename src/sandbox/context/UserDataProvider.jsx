import { Box } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const userDataContext = createContext();

export default function UserDataProvider({ children }) {
  const [showBox, setShowBox] = useState(true);
  const toggleShow = () => {
    setShowBox((prev) => !prev);
  };
  return (
    <>
      {showBox && (
        <Box sx={{ backgroundColor: "red", width: 50, height: 50 }}></Box>
      )}
      <userDataContext.Provider value={toggleShow}>
        {children}
      </userDataContext.Provider>
    </>
  );
}

export const useUserData = () => {
  const context = useContext(userDataContext);
  if (!context)
    throw new Error("useUserData must be used within a ContextProvider");
  return context;
};
