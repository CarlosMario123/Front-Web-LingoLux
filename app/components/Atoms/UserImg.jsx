import { useState } from "react";

export default function UserImg({url = "https://raw.githubusercontent.com/CarlosMario123/VisualizadorDeImagen/main/imgExamples/pablo.jpg"}) {
  const [perfil,setPerfil] = useState(localStorage.getItem("perfil"));
  return (
    <div className="w-10 h-10 rounded-full">
        <img src={perfil} alt="" className="w-16 h-10 rounded-full hover:cursor-pointer"/>
    </div>
  )
}
