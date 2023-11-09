"use client"
import ContainDeslize from "./ContainDeslize"
import CardXL from "./CardXL"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import { dataExtern } from "@/js/dataExtern"
import useWindowWidth from "@/hooks/useWindowWidth"

export default function ContainHerramientas() {
    const router = useRouter();
    const [datos,setDatos] = useState( dataExtern() )


    const windowWidth = useWindowWidth();

  const [posicionX1,setPosicionX1] = useState(0);
  const [posicionX2,setPosicionX2] = useState(3);
 
  

  useEffect(() => {
    if(posicionX2-3 < 0){
        setPosicionX2(3)
        setPosicionX1(0)
    }

    if (windowWidth >= 1120) {
      if(posicionX2 -3 <0){
        return
      }
      setPosicionX1(posicionX2 -3)
    }
    
  if (windowWidth < 1120) {
    setPosicionX1(posicionX2 -2)
  }

  if (windowWidth < 785) {
    setPosicionX1(posicionX2 -1)
  }

  
     
  
    return () => {}
  }, [windowWidth]);

 const nextCard = ()=>{
  if (posicionX2 === datos.length) {
    return;
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


        //funcion que permite el redirecionamiento a otra ruta que se pasara por medio de un callback al componente <CardXl/>
        const redireccionar = (contenido)=>{

            router.push(contenido.urlPage)
        }
  return (
    <div className='mt-10'> 
    <div className="flex items-center justify-between w-full mb-8">
  <h2 className='text-center w-full font-black text-3xl'>Herramientas</h2>
    </div>

<ContainDeslize reverse={backCard} next={nextCard}>
         {
            datos.slice(posicionX1,posicionX2).map( (e,i)=> <CardXL key={i} contenido={e} callback={redireccionar}/>)
         }
       </ContainDeslize>
       
    </div>
  )
}
