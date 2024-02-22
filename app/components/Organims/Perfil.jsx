"use client"
import FotoPerfil from "../Atoms/FotoPerfil";
import Link from "next/link";
import Marco from "../Atoms/Marco";
import { useState } from "react";
export default function PerfilUser() {
    const [logo,setLogo] = useState("https://scontent.ftgz1-1.fna.fbcdn.net/v/t39.30808-6/404339858_1098018337872626_990921725440090246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_dDgEL40c2MAX_oFFH_&_nc_ht=scontent.ftgz1-1.fna&oh=00_AfBfb-8FDngZqBx2tO9XVj9oGlSicMUGaOfBovNXuQ-UEw&oe=65626EED")

    const cambiarPerfil= (contenido)=>{
        setLogo(contenido)
    }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-y-4">
        <h1 className="font-mono text-2xl font-bold">Seleciona una imagen para tu perfil</h1>
      <div className="flex justify-center w-full gap-x-2">
      <div className="flex flex-wrap items-center justify-center bg-white shadow-sm w-96 h-96 shadow-black gap-x-10 ">
          <FotoPerfil cambiar={cambiarPerfil} url={"https://i.ibb.co/SvXdqX9/gato2.jpg"}/>
          <FotoPerfil cambiar={cambiarPerfil}  url={"https://i.ibb.co/9WNZBrN/hamster.jpg"}/>
          <FotoPerfil cambiar={cambiarPerfil} url={"https://i.ibb.co/rFTBnwZ/dog.jpg"}/>
          <FotoPerfil cambiar={cambiarPerfil} url={"https://i.ibb.co/QpDXr7L/rabbit.jpg"}/>
       </div>
        <Marco imagen={logo}/>
      </div>
         <Link href="/home" className="bg-green-700 text-white text-[1.5rem] py-1 px-2 rounded-sm">Vamos por ello</Link>
         <p className="text-[0.8rem]">si no eliges una imagen se te asignara una de manera aleaotoria</p>
    </div>
  )
}
