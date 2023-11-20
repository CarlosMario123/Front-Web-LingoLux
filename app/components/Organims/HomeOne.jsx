"use client"
import { CardsRoute } from "../Molecules/CardsRoute"
import { CardsDiccionary } from "../Molecules/CardsDiccionary"
import { CardsDay } from "../Molecules/CardsDay"
import { TextTitle } from "../Atoms/Text.Title"
import ContainRutas from "../Molecules/ContainRutas"
import ContainDiccionary from "../Molecules/ContainDiccionary"
import Navbar from "../Molecules/Navbar"
import { useState,useEffect } from "react"


//imagenes
import utilesI from "../../recursos/utiles-1.png";

export const HomeOne = () => {
  const [arrayDictionary, setArrayDictionary] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/API/libroVocabulario")
      .then((response) => response.json())
      .then((data) => {
        console.log("se recibio la data")
        console.log(data.libros)
        setArrayDictionary(data.libros)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const arrayTitles = [
    { titulo: "Mis primeras palabras", url: utilesI },
    { titulo: "Aprendiendo a contar", url: utilesI },
    { titulo: "Presente Simple 1", url: utilesI },
    { titulo: "Presente Simple 2", url: utilesI },
    { titulo: "Presente Simple 3", url: utilesI },
    { titulo: "Presente Simple 4", url: utilesI },
    { titulo: "Presente Simple 5 ", url: utilesI },
  ];

  const arrayWords = [
    { ingles: "Hello", espanol: "Hola" },
    { ingles: "Goodbye", espanol: "Adiós" },
    { ingles: "Friend", espanol: "Amigo/a" },
    { ingles: "Book", espanol: "Libro" },
    { ingles: "Computer", espanol: "Computadora" },
  ];

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-[#e8e8ec]">
      <Navbar />
      <ContainRutas arrayTitles={arrayTitles} />
      {arrayDictionary  && (
        <ContainDiccionary arrayDictionry={arrayDictionary}/>
      )}
    </div>
  );
};
