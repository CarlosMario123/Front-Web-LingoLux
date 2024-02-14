'use client';

import Navbar from "../Molecules/Navbar";
import { ContainLessons } from "../Molecules/ContainLessons";
import { useState,useEffect } from "react";

import axios from "axios";
import QuestionLessons from "./QuestionLessons";

export const Leassons = ({leccion}) => {
  const [datos,setDatos] = useState([])
  const [temas,setTemas] = useState([])
  const [preguntas,setPreguntas] = useState([]);
  const [start,setStart] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token",token)
  token = token.slice(1, token.length - 1);
    console.log(token)
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `http://localhost:10000/API/lecciones/${leccion}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setDatos(response.data.leccion.titulo);
          setTemas(response.data.leccion.temas);
          setPreguntas(response.data.leccion.preguntas)
         
         
    
        } else {
          console.log("token no usado pai");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  const readyQuestion = (value)=>{
      setStart(value)
  }

  return (
    <div className="">
      <Navbar/>
      { 
        start ? <QuestionLessons preguntas={preguntas}/> :  <ContainLessons nombre={datos} lecciones={temas} setStart={readyQuestion}/>
      }
    
   
    </div>
  )
}
