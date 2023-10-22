"use client";

import { TextTitle } from "../Atoms/Text.Title"
import { Paragraph } from "../Atoms/Paragraph"
import { Button } from "../Atoms/Button";
 
export const ContainLessons = () => {
  return (
    <div>

      <TextTitle children={"Mis Primeras Palabras"} />

      <div className="mt-3 flex justify-center items-center w-full flex-col">
        <div className="flex justify-around w-[90%] bg-[#09FFFF] p-4">
          <TextTitle children={"Vocales"} />
          <h2 className="mt-6 text-black text-2xl ">Volwes</h2>
        </div>

        <div className=" h-[33rem] bg-sky-200 border-black w-[90%] p-4   ">
          <Paragraph children = { 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi amet dignissimos aut atque at necessitatibus beatae optio iure animi. Quaerat voluptatibus quasi repudiandae odit quos id corporis fuga! Sint quo laudantium deleniti accusamus, tenetur veniam cupiditate omnis debitis aliquam ipsa voluptatum quia non placeat obcaecati. Cumque nam adipisci sequi magnam.' } aligned = {'text-justify'} /> 

        <h2 className = 'text-center my-4 font-bold text-2xl ' >Ejemplos: </h2>

        <div className = ' flex justify-around '>
          <Paragraph children = { 'Cat' }/>
          <Paragraph children = { 'Hat' }/>
        </div>

        </div>

      </div>

      <div className = 'flex justify-around mt-4'>
        <Button children = { 'Atras' }/>
        <Button children={' Siguiente '} />
      </div>

    </div>
  )
}
