"use client"
import React, { useState } from 'react'
import CardXL from './CardXL'
import ContainDeslize from './ContainDeslize'
import { TextTitle } from '../Atoms/Text.Title'
export default function ContainGame() {

    const [infoGame,setInfoGame] = useState(
        {
           url:"https://cdn-icons-png.flaticon.com/512/3790/3790278.png",
           name:"Ahorcado"
        }
    )
  return (
    <div className='mt-10'> 
    <div className="flex items-center justify-between w-full mb-5">
  <h2 className='text-center w-full font-black text-3xl'>Juegos</h2>
    </div>
      
       <ContainDeslize>
        <CardXL contenido={infoGame}/>
        <CardXL  contenido={infoGame}/>
        <CardXL  contenido={infoGame} />
       </ContainDeslize>
    </div>
  )
}
