"use client";
import Link from "next/link";
import UserImg from "../Atoms/UserImg";
import Start from "../Atoms/Start";
import More from "./More";
import useWindowWidth from "@/hooks/useWindowWidth";
import NavSide from "../Organims/NavSide";
import Notificacion from "../Atoms/Notificacion";

export default function Navbar() {
 
  const windowWidth = useWindowWidth();

   
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
      <Link href={"/home"} className="font-normal text-white text-roboto text-[1.2rem]">
        Aprender
      </Link>
      <Link href={"/sala"} className="font-normal text-white text-roboto text-[1.2rem]">
        Sala
      </Link>
      <Link href={"/status"} className="font-normal text-white text-roboto text-[1.2rem]">
        Estatus
      </Link>
      <Start cantidad={5} color = "text-white" />
      <UserImg />
    </>
  )
}

       
       
        </div>
   
       

   <Notificacion/>
    </nav>

  )
}
