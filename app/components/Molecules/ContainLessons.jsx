"use client";

import { TextTitle } from "../Atoms/Text.Title"
import { Paragraph } from "../Atoms/Paragraph"
import { Button } from "../Atoms/Button";
import CardExaple from "./CardExaple";
 
export const ContainLessons = ({leccion}) => {
  return (
    <div className="sm:px-6 flex flex-col items-center pb-6 px-5 overflow-hidden w-full">

  
      <TextTitle children={leccion.nombre} />
   
    

      <div className="mt-3 flex justify-center items-center sm:w-11/12 flex-col style-lessons rounded-lg h-[32rem] w-full">
        <div className="flex w-full color-basic sm:px-16 items-center py-1 justify-between rounded-t-lg px-4">
        
          <p className="text-white text-xl sm:text-2xl p-1">{leccion.temas[0].nombre}</p>
          <h2 className=" text-white text-xl sm:text-2xl font-semibold">{leccion.temas[0].nombre}</h2>
        </div>

        <div className=" h-[33rem]  border-black w-[90%] p-4 ">
          <p className="w-full sm:text-2xl text-xl">{leccion.temas[0].cuerpo }</p> 

       
        <h2 className = 'text-center my-6 font-bold sm:text-2xl text-xl' >Ejemplos: </h2>
         
        {/* Separacion de las cards de ejemplo */}
        <div className = ' flex justify-around mt-10'>
            {
              leccion.temas[0].imagenes.map((ejemplo,index)=> <CardExaple example={ejemplo} key={index}/>)
            }
        </div>

        </div>

      </div>
      {/*Parte de lo botones*/}
      <div className = 'flex  sm:justify-between mt-4 w-11/12 flex-wrap justify-center'>
        <Button children = { 'Atras' }/>
        <Button children={' Siguiente '} />
      </div>

    </div>
  )
}
