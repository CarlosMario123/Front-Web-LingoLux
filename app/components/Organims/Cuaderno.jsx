"use client"
import { useEffect, useState } from "react";
import Navbar from "../Molecules/Navbar";
import { getApunte,updateApunte } from "@/services/apunte/apunte";


export default function Cuaderno() {
  let token =  localStorage.getItem("token");
  token = token.slice(1, token.length - 1);
  const [contenido,setContenido] = useState("");
  useEffect(()=>{
  getApunte(token).then((data)=>{
         setContenido(data.apuntes[0].contenido);
  })
     
  },[])

  const handleContenidoChange = (event) => {
    setContenido(event.target.value); 
  };


  const saveApunte = ()=>{
      updateApunte(token,contenido);
  }
  return (
    <div className="flex flex-col items-center w-full h-screen">
        <Navbar/>
        <div className="flex flex-col items-center w-full h-full px-6">
        <h1 className="py-4 text-2xl font-bold text-center">Libreta</h1>
        <div className="flex items-center justify-center w-full">
            <div className="w-4 h-[30rem] bg-purple-950"></div>
             <textarea className="bg-white h-[30rem] w-8/12" value={contenido} onChange={handleContenidoChange}></textarea>
        </div>
        <button className="w-32 text-white gradient1" onClick={saveApunte}>Guardar</button>
        </div>
    
    </div>
  )
}
