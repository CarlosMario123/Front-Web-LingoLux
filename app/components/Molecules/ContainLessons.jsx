"use client";

import { TextTitle } from "../Atoms/Text.Title"
import { Paragraph } from "../Atoms/Paragraph"
import { Button } from "../Atoms/Button";
import CardExaple from "./CardExaple";
import { useState,useEffect } from "react";
import Completado from "../Organims/Completado";
 
export const ContainLessons = ({nombre,lecciones,setStart}) => {


  const [respuestas, setRespuestas] = useState([]);
  const [index,setIndex] = useState(0)
  const [cuerpo,setCuerpo] = useState("");
  const [imagenes,setImagenes] = useState(null)
  const [name,setName] = useState("");
  const [ready,setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const formattedToken = token.slice(1, token.length - 1);
  
    const peticiones = lecciones.map((leccion) => {
      return `http://localhost:3000/api/temas/?id=${leccion}`;
    });
  
    const promesas = peticiones.map((peticion) => {
      return fetch(peticion, {
        headers: {
          Authorization: formattedToken,
        },
      });
    });
  
    Promise.all(promesas)
      .then((respuestas) => {
        return Promise.all(respuestas.map((respuesta) => respuesta.json()));
      })
      .then((data) => {
   
        setRespuestas(data[0]);
        setIndex(0); // Establecer el índice inicial al cargar los datos
        setCuerpo(data[0].temas[0].cuerpo);
        setImagenes(data[0].temas[0].imagen);
        setName(data[0].temas[0].nombre);
  
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [lecciones]);
  
  const handleClickNext = () => {
    const newIndex = index + 1;
  
    setIndex(newIndex);
    if (index < respuestas.temas.length - 1) {
      console.log(respuestas.temas[newIndex].imagen)
      setCuerpo(respuestas.temas[newIndex].cuerpo);
      setImagenes(respuestas.temas[newIndex].imagen);
      setName(respuestas.temas[newIndex].nombre);
    }else{
        setReady(true)
    }
  };
  
  const handleClickPrev = () => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex);
      setCuerpo(respuestas.temas[newIndex].cuerpo);
      setImagenes(respuestas.temas[newIndex].imagen);
      setName(respuestas.temas[newIndex].nombre);
    }
  };


  const regresar = ()=>{
    setReady(false)
    setIndex(0);
    setCuerpo(respuestas.temas[0].cuerpo);
    setImagenes(respuestas.temas[0].imagen);
    setName(respuestas.temas[0].nombre);
  }
  

  return (
    <div className="flex flex-col items-center w-full px-5 pb-6 overflow-hidden sm:px-6">
      {
        ready ? (
          <Completado evento2={regresar} evento1={setStart}/>
        ) : (
          <>
            <TextTitle children={nombre} />
            <div className="mt-3 flex justify-center items-center sm:w-11/12 flex-col style-lessons rounded-lg h-[32rem] w-full">
              <div className="flex items-center justify-between w-full px-4 py-1 rounded-t-lg color-basic sm:px-16">
                <h2 className="text-xl font-semibold text-center text-white sm:text-2xl">{name}</h2>
              </div>
  
              <div className="h-[33rem] border-black w-[90%] p-4">
                <p className="w-full text-xl sm:text-2xl">{cuerpo}</p>
  
                
  
                {/* Separacion de las cards de ejemplo */}
                <div className='flex justify-around mt-20'>
                  {
                    imagenes && imagenes.map((ejemplo, index) => <CardExaple example={ejemplo} key={index} />)
                  }
                </div>
              </div>
            </div>
            {/* Parte de los botones */}
            <div className='flex flex-wrap justify-center w-11/12 mt-4 sm:justify-between'>
              <Button children={'Atras'} onClick={handleClickPrev} />
              <Button children={'Siguiente'} onClick={handleClickNext} />
            </div>
          </>
        )
      }
    </div>
  )
  
}
