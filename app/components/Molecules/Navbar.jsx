"use client";
import Link from "next/link";
import UserImg from "../Atoms/UserImg";
import Start from "../Atoms/Start";
import More from "./More";
import useWindowWidth from "@/hooks/useWindowWidth";
import NavSide from "../Organims/NavSide";
import Notificacion from "../Atoms/Notificacion";
import { contextGlobal } from "../Atoms/ContextoQuizz";
import { useEffect, useState } from "react";
import { getStartUser } from "@/services/user/getStartUser";
export default function Navbar() {

 const [start,setStart] = useState(0);
  const windowWidth = useWindowWidth();
  const {empezarCargar } = contextGlobal();
   


  
  useEffect(()=>{
    let id= localStorage.getItem("id").toString();
    id = id.slice(1, id.length - 1);
      getStartUser(id).then((data)=>{

         setStart(data)
      })
  },[])
    //aca se definira las rutas de los enlaces
  return (

    <nav className="flex justify-end w-full px-4 py-2 color-basic">
        <div className="flex flex-row items-center gap-x-10">

        {
  windowWidth <= 700 ? (
    <NavSide>
    <More />
    </NavSide>
  ) : (
    <>
      <Link href={"/home"} className="font-normal text-white text-roboto text-[1.2rem]" onClick={empezarCargar}>
        Aprender
      </Link>
      <Link href={"/sala"} className="font-normal text-white text-roboto text-[1.2rem]" onClick={empezarCargar}>
        Sala
      </Link>
      <Link href={"/status"} className="font-normal text-white text-roboto text-[1.2rem]" onClick={empezarCargar}>
        Estatus
      </Link>
      <Start cantidad={start} color = "text-white" />
      <UserImg />
    </>
  )
}

       
       
        </div>
   
       

   <Notificacion/>
    </nav>

  )
}
