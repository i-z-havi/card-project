import React, { createContext, useContext } from "react";

//create context
const MyContext = createContext();

//create provider
export default function DataProvider({ children }) {
  const myData = {
    data1: 100,
    data2: 200,
  };

  return <MyContext.Provider value={myData}>{children}</MyContext.Provider>;
}

//create hook to use the context and handle error
export const useData = () => {
  const context = useContext(MyContext);
  if (!context)
    throw new Error("useData must be used within a ContextProvider");
  return context;
};
