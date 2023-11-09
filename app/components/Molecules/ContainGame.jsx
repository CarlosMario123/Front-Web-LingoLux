"use client"
import React, { useState,useEffect } from 'react'
import CardXL from './CardXL'
import ContainDeslize from './ContainDeslize'
import { TextTitle } from '../Atoms/Text.Title'
import { dataGame } from '@/js/dataGames'
import useWindowWidth from '@/hooks/useWindowWidth'
export default function ContainGame() {
  
  

    const [infoGame,setInfoGame] = useState(dataGame())
      
  const windowWidth = useWindowWidth();

  const [posicionX1,setPosicionX1] = useState(0);
  const [posicionX2,setPosicionX2] = useState(3);
  const [controlWidth,setWidth] = useState(3);
  

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
    if (posicionX2 === infoGame.length) {
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
     
  return (
    <div className='mt-10'> 
    <div className="flex items-center justify-between w-full mb-5">
  <h2 className='text-center w-full font-black text-3xl'>Juegos</h2>
    </div>
      
       <ContainDeslize next={nextCard} reverse={backCard}>
        {
           infoGame.slice(posicionX1,posicionX2).map((e,i)=>{
            return <CardXL contenido={e}/>
           })
        }
       </ContainDeslize>
    </div>
  )
}
