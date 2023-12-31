"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Molecules/Navbar";
import ContainRutas from "../Molecules/ContainRutas";
import ContainDiccionary from "../Molecules/ContainDiccionary";

export const HomeOne = () => {
  const [arrayDictionary, setArrayDictionary] = useState(null);
 

  useEffect(() => {
   
 
    fetch("http://localhost:3000/API/libroVocabulario")
      .then((response) => response.json())
      .then((data) => {
       
        setArrayDictionary(data.libros);
      })
      .catch((error) => console.error("Error al obtener datos del diccionario:", error));

  }, []);



  return (
    <div className="flex flex-col items-center w-screen h-screen bg-[#e8e8ec]">
      <Navbar />
 <ContainRutas  />
 {arrayDictionary  && (
        <ContainDiccionary arrayDictionry={arrayDictionary}/>
      )}
    </div>
  );
};
