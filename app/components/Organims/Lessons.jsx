'use client';

import Navbar from "../Molecules/Navbar";
import { ContainLessons } from "../Molecules/ContainLessons";

export const Leassons = ({leccion}) => {
  return (
    <div className="w-screen bg-white">
      <Navbar/>

      <ContainLessons leccion={leccion}/>

    </div>
  )
}
