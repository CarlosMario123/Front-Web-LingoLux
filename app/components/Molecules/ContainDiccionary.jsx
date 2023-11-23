"use client"
import { useState,useEffect } from "react";
import MasContent from "../Atoms/MasContent";
import { TextTitle } from "../Atoms/Text.Title";
import { CardsDiccionary } from "./CardsDiccionary";
import ContainDeslize from "./ContainDeslize";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function ContainDiccionary({ arrayDictionry }) {

  const [datos,setDatos] = useState(arrayDictionry)
  const windowWidth = useWindowWidth();
  const [posicionX1, setPosicionX1] = useState(0);
  const [posicionX2, setPosicionX2] = useState(5);
  
  
   useEffect(()=>{
  
      setDatos(arrayDictionry)
      console.log("en el efecto")
      console.log(datos)
      return ()=>{}
   },[])
  useEffect(() => {
    if(posicionX2-5 < 0){
      setPosicionX2(5)
      setPosicionX1(0)
  }

    if (windowWidth > 1103) {
      setPosicionX1(posicionX2 -5)
    }
    
  if (windowWidth < 1103) {
    setPosicionX1(posicionX2 -4)
  }
  
  if (windowWidth < 974) {
    setPosicionX1(posicionX2 -3)
  }

  if (windowWidth < 752) {
    setPosicionX1(posicionX2 -2)
  }
  if(windowWidth < 570){
    setPosicionX1(posicionX2 -1)
  }

  
     
  
    return () => {}
  }, [windowWidth]);
  

  const nextCard = () => {
    if (posicionX2 === arrayDictionry.length) {
      return;
    }
    const newPosX2 = Math.min(posicionX2 + 1, arrayDictionry.length);
    setPosicionX1(newPosX2 - 5);
    setPosicionX2(newPosX2);
  }
  
  const backCard = () => {
    if (posicionX1 === 0) {
      return;
    }
    const newPosX1 = Math.max(posicionX1 - 1, 0);
    setPosicionX1(newPosX1);
    setPosicionX2(newPosX1 + 5);
  }
  
  return (
    <>
      <div className="flex items-center justify-between w-full px-9">
        <TextTitle children={"Diccionarios"} />
      </div>
  
      <ContainDeslize next={nextCard} reverse={backCard}>
        {datos.slice(posicionX1, posicionX2).map((word, index) => (
          <CardsDiccionary key={index} word={word} />
        ))}
      </ContainDeslize>
    </>
  )
        }