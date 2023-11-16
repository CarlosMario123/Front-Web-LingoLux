"use client"
import React, { useContext,useState } from "react";

//se crea el contexto
const MyContext = React.createContext();

// se crea un componente que proporciona el contexto
export const GlobalState = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <MyContext.Provider value={{state,setState}}>
      {children}
    </MyContext.Provider>
  );
};

export const contextGlobal = ()=>{
    return useContext(MyContext);
}