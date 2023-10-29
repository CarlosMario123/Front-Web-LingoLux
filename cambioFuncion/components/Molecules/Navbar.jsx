"use client";

import Link from "next/link";
import UserImg from "../Atoms/UserImg";
import Start from "../Atoms/Start";
export default function Navbar() {

    //aca se definira las rutas de los enlaces
  return (
    <nav className="flex justify-end w-full px-4 py-2 color-basic">
        <div className="flex flex-row items-center gap-x-10">
        <Link href={"/"} className="font-light ">Aprender</Link>
         <Link href={"/sala"} className="font-light">Sala</Link>
         <Link href={"/status"} className="font-light">estatus</Link>
         <Start cantidad = {5}/>
        <UserImg/>
        </div>
       
    </nav>
  )
}
