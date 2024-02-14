"use client"
import Image from 'next/image';
import useWindowWidth from '@/hooks/useWindowWidth';
import utiles from "../../recursos/utiles-1.png"
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { contextGlobal } from '../Atoms/ContextoQuizz';
export const CardsRoute = ({leccion}) => {
  const {empezarCargar } = contextGlobal();
  const [id,setID] = useState(leccion._id)
  const router = useRouter()
  const windowWidth = useWindowWidth();
  
   let medidaImg = (windowWidth < 642) ? 80 : 90;

   const irViewLesson = ()=>{
    empezarCargar()
     router.push(`/lessons/${id}`)
   }
  return (
    
    <div className="flex flex-row items-center w-56 rounded-md cursor-pointer card-style sm:w-72" onClick={irViewLesson}>
       <div className='relative w-4 h-full gradientCard rounded-l-md'></div>
      <div className='flex flex-col items-center w-full pt-1'>
      <Image  src={utiles} alt="" width={medidaImg} height={medidaImg}/>
      <div className="pt-1 pb-4">
        <h2 className="font-semibold text-center text-gray-800 sm:text-xl text-[1rem]">{leccion.titulo}</h2>
        
      </div>
      </div>
     
     
    </div>
  );
};
