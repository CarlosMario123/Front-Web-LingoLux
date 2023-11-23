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
    <div className="w-full h-screen justify-center items-center flex flex-col gap-y-4">
        <h1 className="text-2xl font-mono font-bold">Seleciona una imagen para tu perfil</h1>
      <div className="flex w-full justify-center gap-x-2">
      <div className="bg-white w-96 h-96 flex justify-center items-center shadow-sm shadow-black flex-wrap gap-x-10 ">
          <FotoPerfil cambiar={cambiarPerfil} url={"https://scontent.ftgz1-1.fna.fbcdn.net/v/t39.30808-6/404339858_1098018337872626_990921725440090246_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_dDgEL40c2MAX_oFFH_&_nc_ht=scontent.ftgz1-1.fna&oh=00_AfBfb-8FDngZqBx2tO9XVj9oGlSicMUGaOfBovNXuQ-UEw&oe=65626EED"}/>
          <FotoPerfil cambiar={cambiarPerfil}  url={"https://scontent.ftgz1-1.fna.fbcdn.net/v/t39.30808-6/404284038_1098018334539293_16551220345261063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RaJ_U4vFTt8AX8mIi4X&_nc_ht=scontent.ftgz1-1.fna&oh=00_AfBitvja03SHYTEO89pruPYsCW-Hi4l6cmcht8qqnrAkKg&oe=65625555"}/>
          <FotoPerfil cambiar={cambiarPerfil} url={"https://scontent.ftgz1-2.fna.fbcdn.net/v/t39.30808-6/404305882_1098018331205960_5318841069104489766_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1D5JWdK0qskAX_EP1wu&_nc_ht=scontent.ftgz1-2.fna&oh=00_AfDmyr5gnbvihTbY0bvuIjpoZNRMsl36aLZyKupAJgmeYA&oe=6563CE17"}/>
          <FotoPerfil cambiar={cambiarPerfil} url={"https://scontent.ftgz1-1.fna.fbcdn.net/v/t39.30808-6/404309375_1098018397872620_8593981032789849108_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=abyITzHU4LIAX9AzH-5&_nc_ht=scontent.ftgz1-1.fna&oh=00_AfCsRilNrWQbNdKUcWC4Vaty2edCpTlDFSmzrIT8BqYJ_w&oe=656288E8"}/>
       </div>
        <Marco imagen={logo}/>
      </div>
         <Link href="/home" className="bg-green-700 text-white text-[1.5rem] py-1 px-2 rounded-sm">Vamos por ello</Link>
         <p className="text-[0.8rem]">si no eliges una imagen se te asignara una de manera aleaotoria</p>
    </div>
  )
}
