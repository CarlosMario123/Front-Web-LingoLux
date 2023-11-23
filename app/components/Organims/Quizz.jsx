"use client"


import { contextGlobal } from "../Atoms/ContextoQuizz";
import Link from "next/link";
import { QuizzWord} from "@/js/quiizzWord";
import { useState,useEffect } from "react";
import Answer from "../Atoms/Answer";
export default function Quizz() 
{
    const { setState, state } = contextGlobal();
    const [index,setIndex] = useState(0);
    const [questions,setQuestions] = useState([]);
    const [puntos,setPuntos] = useState(0);
    const [result,setResult] = useState("");

    
    useEffect(()=>{
 
      if(state.length != index){
        setQuestions(QuizzWord(state,index))
      }
      
    },[index])
    
    const evaluarResultado = (word)=>{
      if(state.length != index){
        if(state[index].spanish == word){
            setPuntos(puntos + 1)
           
            setResult("Correcto")
        }else{
          setResult("incorrecto")
        }
        setIndex(index+1);
      }else{
        setState([])
  
      }
      
    }

    const terminar = ()=>{
         if(!(index < state.length -1)){
             setState([]);
         }
    }

    if(state.length == 0){
        return <div className="flex flex-col items-center justify-center w-full h-screen">
            <p className="font-mono text-4xl font-bold">No hay formulario que realizar</p>
            <Link href={"/"} className="p-2 mt-5 text-2xl text-white bg-blue-700 rounded-md">Regresar al home</Link>
        </div>
    }
  return (
    <div className="flex flex-col items-center w-full h-screen px-2 pt-2 rounded-md ">
      <div className="w-full">
      <Link href={"/"} className="p-1 text-[1.2rem] text-white bg-blue-700" onClick={terminar}>Volver</Link>
            <h1 className="font-mono text-3xl font-bold text-center">Quizz challenge</h1>
      </div>

      <div className="flex flex-col items-center w-8/12 pb-20 mt-4 bg-white rounded-xl">
        <p className="w-full py-1 font-mono text-2xl font-bold text-center text-white rounded-t-xl gradient1">{ (index < state.length -1) ? state[index].english : ""}</p>
        <div className="flex flex-wrap items-center justify-center w-8/12 mt-12 xl:justify-between xl:gap-x-4 xl:gap-y-16 gap-x-2 gap-y-5">
          {
            (index < state.length -1) ? (  questions.map((e,index)=>{
              return <Answer respuesta={e} key={index} evaluar={evaluarResultado}/>
            })) : (<div className="flex flex-col"><p className="font-mono text-2xl font-bold">Tu puntaje fue de {puntos} : {state.length - 1} </p>
  
            </div>)
           
          }
        </div>
        {
          (index < state.length -1 && result != "") &&  <p className={`${(result == "Correcto") ? "border-2 border-green-600 ":"border-2 border-red-600 "} text-2xl p-1 rounded-md mt-6 w-1/2 text-center font-black font-mono`}>{result}</p>
        }
       
      </div>
  
    </div>
  )
}
