"use client";

import { TextTitle } from "../Atoms/Text.Title"
import { Paragraph } from "../Atoms/Paragraph"
import { Button } from "../Atoms/Button";
import CardExaple from "./CardExaple";
 
export const ContainLessons = ({leccion}) => {
  return (
    <div className="px-9 flex flex-col items-center pb-6">

      <div className="w-full">
      <TextTitle children={leccion.nombre} />
      </div>
    

      <div className="mt-3 flex justify-center items-center w-11/12 flex-col style-lessons rounded-lg h-[32rem]">
        <div className="flex w-full bg-[#09FFFF] px-16 items-center py-1 justify-between rounded-t-lg ">
          <TextTitle children={leccion.temas[0].nombre} />
          <h2 className=" text-black text-2xl font-semibold">{leccion.temas[0].nombre}</h2>
        </div>

        <div className=" h-[33rem]  border-black w-[90%] p-4 ">
          <Paragraph children = {leccion.temas[0].cuerpo } aligned = {'text-center'} /> 

       
        <h2 className = 'text-center my-6 font-bold text-2xl ' >Ejemplos: </h2>
         
        {/* Separacion de las cards de ejemplo */}
        <div className = ' flex justify-around mt-10'>
            {
              leccion.temas[0].imagenes.map((ejemplo,index)=> <CardExaple example={ejemplo} key={index}/>)
            }
        </div>

        </div>

      </div>
      {/*Parte de lo botones*/}
      <div className = 'flex  justify-between mt-4 w-11/12'>
        <Button children = { 'Atras' }/>
        <Button children={' Siguiente '} />
      </div>

    </div>
  )
}
