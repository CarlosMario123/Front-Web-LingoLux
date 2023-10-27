"use client"
import { TextTitle } from "../Atoms/Text.Title"
import { CardsRoute } from "./CardsRoute"
import ContainDeslize from "./ContainDeslize"
import { useState } from "react";
export default function ContainRutas({arrayTitles}) {

  const [posicionX1,setPosicionX1] = useState(0);
  const [posicionX2,setPosicionX2] = useState(3);
  
 const nextCard = ()=>{

  if(posicionX2 == arrayTitles.length){
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
    <TextTitle children={'Ruta de Viaje'} />
    </div>
    <ContainDeslize next={nextCard} reverse={backCard}>
    {arrayTitles.slice(posicionX1,posicionX2).map(({ titulo, url},i) => (
        <CardsRoute key={i} children={titulo} url={url} />
      ))}
    </ContainDeslize>

    </>
  )
}
