"use client"
import ContainDeslize from "./ContainDeslize";
import CardXL from "./CardXL";
import { historias } from "@/dataFalse/history";
import { useEffect, useState } from "react";
//Este es un hook personalizado que nos permite medir el tamaño width de nuestra page
import useWindowWidth from "@/hooks/useWindowWidth";
import { useRouter } from "next/navigation";
export default function ContainHistory() {
  const router = useRouter()
  const [hist,setHi] = useState([]);
   
  const windowWidth = useWindowWidth();

  const [posicionX1,setPosicionX1] = useState(0);
  const [posicionX2,setPosicionX2] = useState(3);

  useEffect(() => {
    const recibir = async () => {
      try {
        let datos = await historias();
        
         console.log("datos: ",datos.libros)
     
          const usar = datos.libros.map((e) => ({
            url: 'https://static.vecteezy.com/system/resources/previews/017/744/893/original/open-book-illustration-png.png',
            name: e.titulo,
            id: e._id,
          }));

        setHi(usar);
      } catch (error) {
        console.error('Error al recibir historias:', error);
      }
    };
    recibir();
  }, []);
  

  useEffect(() => {
    if(posicionX2-3 < 0){
      setPosicionX2(3)
      setPosicionX1(0)
  }
    if (windowWidth > 1120) {
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
  if (posicionX2 === hist.length) {
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

  const sendToBooks = (contenido)=>{
       router.push(`/historia/${contenido.id}`)
  }

  return (
    <div className='mt-10'> 
    <div className="flex items-center justify-between w-full mb-5">
  <h2 className='w-full text-3xl font-black text-center'>Historias</h2>
    </div>

<ContainDeslize next={nextCard} reverse={backCard}>
         {
      (hist.slice(posicionX1,posicionX2).map((e,i)=>{
            return <CardXL contenido={e} key={i} callback={sendToBooks}/>
        }))
            
         }
       </ContainDeslize>
       
    </div>
  )
}
