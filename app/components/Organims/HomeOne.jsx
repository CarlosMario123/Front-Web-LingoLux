import { CardsRoute } from "../Molecules/CardsRoute"
import { CardsDiccionary } from "../Molecules/CardsDiccionary"
import { CardsDay } from "../Molecules/CardsDay"
import { TextTitle } from "../Atoms/Text.Title"
import ContainRutas from "../Molecules/ContainRutas"
import ContainDiccionary from "../Molecules/ContainDiccionary"
import Navbar from "../Molecules/Navbar"

export const HomeOne = () => {

    const arrayTitles = [
        {
          titulo: "Mis primeras palabras",
          descripcion: "Un viaje encantador a través de las primeras palabras que marcan el inicio del lenguaje, explorando el fascinante mundo de la comunicación inicial."
        },
        {
          titulo: "Aprendiendo a contar",
          descripcion: "Una experiencia educativa llena de números y diversión, diseñada para enseñar a los pequeños los conceptos básicos del conteo de una manera emocionante y atractiva."
        },
        {
          titulo: "Presente Simple",
          descripcion: "Sumérgete en las complejidad cómo este tiempo verbal estructura nuestras expresiones cotidianas de una manera clara y concisa."
        }
      ]

      const arrayDictionry = [ 'Mascotas', 'Gramatica Presente Simple', 'Profesiones', 'Frutas',"asdsadas","asdaasd",'Mascotas', 'Gramatica Presente Simple', 'Profesiones', 'Frutas',"asdsadas","asdaasd"]

      const arrayWords = [
        { ingles: 'Hello', espanol: 'Hola' },
        { ingles: 'Goodbye', espanol: 'Adiós' },
        { ingles: 'Friend', espanol: 'Amigo/a' },
        { ingles: 'Book', espanol: 'Libro' },
        { ingles: 'Computer', espanol: 'Computadora' },
      ]

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-white">
     <Navbar/>
    <ContainRutas arrayTitles={arrayTitles}/>
    <ContainDiccionary arrayDictionry={arrayDictionry}/>

  </div>
  
  )
}
