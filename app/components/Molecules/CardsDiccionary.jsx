import { useState } from "react"
import { useRouter } from "next/navigation";

export const CardsDiccionary = ({word}) => {

  const router = useRouter();
   const [id,setId] = useState(word._id)
   const irDiccionarios = ()=>{
      router.push(`/dictionary/${id}`)
   }
  return (
    <div className="flex h-[12rem] rounded-md shadow-lg card-style w-[11rem] flex-col justify-center items-center overflow-hidden cursor-pointer" onClick={irDiccionarios}>
   
        <div className="gradientCard w-full h-12 rotate-[-40deg] relative  top-0 left-[-120px]"></div>
        <img src={word.contenido[0].url}  className="w-24 h-24"/>
        <p className = "mt-2 font-semibold text-center text-gray-600 "> { word.titulo} </p>
    </div>
  )
}
