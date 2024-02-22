"use client"
import React, { useContext,useState } from "react";
import LodingPage from "../Organims/LodingPage";

//se crea el contexto
const MyContext = React.createContext();

// se crea un componente que proporciona el contexto
export const GlobalState = ({ children }) => {
  const [state, setState] = useState(true);
  
  const empezarCargar = ()=>{
      setState(false);

      setTimeout(()=>{
         setState(true);
      },2100)
  };
  return (
    <MyContext.Provider value={{state,setState,empezarCargar}}>
      {state ?  children : <LodingPage/>}
    </MyContext.Provider>
  );
};

export const contextGlobal = ()=>{
    return useContext(MyContext);
}