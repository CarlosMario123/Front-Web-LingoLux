"use client";

import { useState } from "react";
import TituloRect from "../Atoms/TituloRect";
import Navbar from "../Molecules/Navbar";


export default function OrganismoHistory({data}) {
    const [traducir,setTraducir] = useState(true);


  return (
    <div className="w-full flex flex-col items-center">
      <Navbar/>

      <div className="style-lessons w-10/12 mt-12 rounded-md h-[26rem]">
     <TituloRect texto={data.name}/>
       <p className="my-2 px-3 w-full">{(traducir) ? data.eng : data.esp}</p>
      </div>
      <button className="bg-[#00D1FF] text-white py-1 px-2 mt-4 rounded-md text-2xl" onClick={()=>  setTraducir(!traducir)}>Traducir</button>
    </div>
  )
}
