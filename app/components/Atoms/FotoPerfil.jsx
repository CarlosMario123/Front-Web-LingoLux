import { useState } from "react"

export default function FotoPerfil({url,cambiar}) {
    const [perfil,setPerfil] = useState(url);
    const saveLocal = ()=>{
        localStorage.setItem("perfil",perfil);
        cambiar(perfil)
    }
  return (
    <div className="w-28 h-28 rounded-full cursor-pointer" onClick={saveLocal}>
        <img src={perfil} alt="" className="w-28 h-28"/>
    </div>
     
  )
}
