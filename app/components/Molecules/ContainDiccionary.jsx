"use client"
import { useState } from "react";
import MasContent from "../Atoms/MasContent";
import { TextTitle } from "../Atoms/Text.Title";
import { CardsDiccionary } from "./CardsDiccionary";
import ContainDeslize from "./ContainDeslize";


export default function ContainDiccionary({ arrayDictionry }) {
   const [posicionX1,setPosicionX1] = useState(0);
   const [posicionX2,setPosicionX2] = useState(5);
   
  const nextCard = ()=>{

   if(posicionX2 == arrayDictionry.length){
    return
   }
     setPosicionX1(posicionX1 + 1);
     setPosicionX2(posicionX2 + 1)
  }

  const backCard = () =>{

    if(posicionX1 == 0){
      return
    }
     setPosicionX1(posicionX1-1)
     setPosicionX2(posicionX2 - 1)
  }
  return (
    <>
    <div className="flex items-center justify-between w-full px-9">
    <TextTitle children={"Diccionarios"} />
   
    </div>
      
      <ContainDeslize next={nextCard} reverse={backCard}>
        {/*//! Agrega como funciona este Componente  */}
      {arrayDictionry.slice(posicionX1, posicionX2).map((word, index) => (
         <CardsDiccionary key={index} word={word} /> 
        ))}
      </ContainDeslize>
   
    </>
  );
}
