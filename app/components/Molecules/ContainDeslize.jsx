
"use client"
import Image from "next/image";
import prox from "../../recursos/proximo.png"
import atras from "../../recursos/atras.png"


export default function ContainDeslize({ children,reverse,next }) {
   const handleNext = ()=>{
       next();
   } 
   const handleReverse = ()=>{
      reverse();
   }
  return (
    <div className="flex justify-between w-full px-8 gap-x-2  flex-row">
     <button><Image src={atras} width={40} height={40} onClick={handleReverse} /></button>
     <div className="flex justify-between w-full px-8 gap-x-2  flex-row">
     {children}
     </div>
   
     <button><Image src={prox} width={40} height={40} onClick={handleNext}/></button>
         
    </div>
  );
}

