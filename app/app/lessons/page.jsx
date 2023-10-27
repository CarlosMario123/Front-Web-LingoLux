'use client';

import { Leassons } from "@/components/Organims/Lessons";
import { Getleccion } from "@/dataFalse/Leccion";
 const Lessonspage = () => {
   let lecciones = Getleccion();
  return (
    <div>
        <Leassons leccion={lecciones[0]}  />
    </div>
  )
}

export default Lessonspage
