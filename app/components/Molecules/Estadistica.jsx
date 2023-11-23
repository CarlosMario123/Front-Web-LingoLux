"use client"
import Perfil from "./Perfil";
import Porcentajes from "./Porcentajes";
import { useState } from "react";



export default function Estadistica() {
  const [perfil,setPerfil] = useState(localStorage.getItem("perfil"));
    const url2 = "https://github.com/CarlosMario123/VisualizadorDeImagen/blob/main/imgExamples/pablo.jpg?raw=true"
  return (
    <div className="sm:w-[30rem] sm:h-72 bg-white card-style flex flex-col items-center overflow-y-auto gap-y-2 w-11/12 pb-4 pt-2">
       <h1 className="w-full text-xl font-black text-center ">Estadisticas</h1>
       <div className="flex flex-wrap-reverse items-center justify-center w-full px-6 mt-3 gap-x-10 gap-y-4">
        <Porcentajes/>
        <Perfil start={5} correo={"pablo@gmail.com"} url={perfil}/>
       </div>
    </div> 
  )
}
