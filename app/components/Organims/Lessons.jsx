'use client';
import { ContainLessons } from "../Molecules/ContainLessons";
import Navbar from "../Molecules/Navbar";
import QuestionLessons from "./QuestionLessons";
import { useState,useEffect } from "react";
import axios from "axios";


export const Leassons = ({leccion}) => {
  const [datos,setDatos] = useState([])
  const [temas,setTemas] = useState([])
  const [preguntas,setPreguntas] = useState([]);
  const [start,setStart] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
  token = token.slice(1, token.length - 1);

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
          console.log("respuesta")
          console.log(response)
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
        start ? <QuestionLessons preguntas={preguntas} idLesson={leccion}/> :  <ContainLessons nombre={datos} lecciones={temas} setStart={readyQuestion}/>
      }
    
   
    </div>
  )
}
