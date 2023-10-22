import { CardsRoute } from "../Molecules/CardsRoute"
import { CardsDiccionary } from "../Molecules/CardsDiccionary"
import { CardsDay } from "../Molecules/CardsDay"
import { TextTitle } from "../Atoms/Text.Title"

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
          descripcion: "Sumérgete en las complejidades del tiempo gramatical con esta guía del Presente Simple. Descubre cómo este tiempo verbal estructura nuestras expresiones cotidianas de una manera clara y concisa."
        }
      ]

      const arrayDictionry = [ 'Mascotas', 'Gramatica Presente Simple', 'Profesiones', 'Frutas']

      const arrayWords = [
        { ingles: 'Hello', espanol: 'Hola' },
        { ingles: 'Goodbye', espanol: 'Adiós' },
        { ingles: 'Friend', espanol: 'Amigo/a' },
        { ingles: 'Book', espanol: 'Libro' },
        { ingles: 'Computer', espanol: 'Computadora' },
      ]

  return (
    <>
    <TextTitle children={'Ruta de Viaje'} />
    <div className='flex flex-col sm:flex-row'>
      {arrayTitles.map(({ titulo, descripcion }) => (
        <CardsRoute key={titulo} children={titulo} description={descripcion} />
      ))}
    </div>
  
    <TextTitle children={"Diccionario"} />
  
    <div className='flex w-screen justify-between gap-x-4 flex-row sm: '>
      {arrayDictionry.map((word, index) => (
        <CardsDiccionary key={index} children={word} />
      ))}
    </div>
  
    <TextTitle children={'Palabras del día'} aligned={'text-center'} />
    <div className = 'flex flex-col sm:flex-row' >
      {
        arrayWords.map( (word, index) => (
          <CardsDay key = { index } childrenEng = { word.ingles } childrenEs={ word.espanol }  />
        ) )
      }
    </div>
  </>
  
  )
}
