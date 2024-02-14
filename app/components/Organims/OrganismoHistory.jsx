"use client";

import { useState } from "react";
import TituloRect from "../Atoms/TituloRect";
import Navbar from "../Molecules/Navbar";


export default function OrganismoHistory({data}) {
    const [traducir,setTraducir] = useState(true);


  return (
    <div className="flex flex-col items-center w-full">
      <Navbar/>

      <div className="style-lessons w-10/12 mt-12 rounded-md h-[26rem] overflow-y-auto">
  
     <h1 className="w-full px-2 py-1 text-white gradient1 text-[1.3rem] font-mono font-semibold rounded-t-md">{data.libro.titulo}</h1>
       <p className="w-full px-10 my-2 font-mono" style={{ lineHeight: '1.5' }}>{(traducir) ? data.libro.contenido[0].contenidoIng: data.libro.contenido[0].contenidoEsp}</p>
      </div>
      <button className="px-2 py-1 mt-4 text-2xl text-white rounded-md gradient1" onClick={()=>  setTraducir(!traducir)}>Traducir</button>
    </div>
  )
}
