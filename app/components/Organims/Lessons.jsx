'use client';

import Navbar from "../Molecules/Navbar";
import { ContainLessons } from "../Molecules/ContainLessons";

export const Leassons = ({leccion}) => {
  return (
    <div className="">
      <Navbar/>

      <ContainLessons leccion={leccion}/>

    </div>
  )
}
