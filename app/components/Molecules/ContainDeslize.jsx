
"use client"
import Image from "next/image";
import prox from "../../recursos/proximo.png"
import atras from "../../recursos/atras.png"
import useWindowWidth from "@/hooks/useWindowWidth";

export default function ContainDeslize({ children,reverse,next }) {
  const windowWidth = useWindowWidth();
  const sizeSmall = windowWidth < 494;
  
   const handleNext = ()=>{
       next();
   } 
   const handleReverse = ()=>{
      reverse();
   }
  return (
    <div className={`flex flex-row  w-full px-8 ${(sizeSmall) ? "gap-x-1 justify-center":"gap-x-2 justify-between"}`}>
     <button><Image src={atras} width={40} height={40} onClick={handleReverse} /></button>
     <div className={`flex flex-row justify-center w-full px-8 gap-x-8 xl:justify-between xl:gap-x-2 ${(sizeSmall) ? "gap-x-0 ":"gap-x-8 "}`}>
     {children}
     </div>
   
     <button><Image src={prox} width={40} height={40} onClick={handleNext}/></button>
         
    </div>
  );
}

