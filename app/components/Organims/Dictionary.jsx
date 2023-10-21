import { CardsDiccionary } from "../Molecules/CardsDiccionary"

export const Dictionary = () => {

  const petsArray = [
    { ingles: 'Dog', espanol: 'Perro' },
    { ingles: 'Cat', espanol: 'Gato' },
    { ingles: 'Fish', espanol: 'Pez' },
    { ingles: 'Bird', espanol: 'Pájaro' },
    { ingles: 'Rabbit', espanol: 'Conejo' },
    { ingles: 'Hamster', espanol: 'Hámster' },
    { ingles: 'Turtle', espanol: 'Tortuga' },
    { ingles: 'Guinea Pig', espanol: 'Cobaya' },
    { ingles: 'Snake', espanol: 'Serpiente' },
    { ingles: 'Horse', espanol: 'Caballo' },
    { ingles: 'Ferret', espanol: 'Hurón' },
    { ingles: 'Parrot', espanol: 'Loro' },
    { ingles: 'Goldfish', espanol: 'Pez Dorado' },
  ]

  return (

    <div className = ' flex flex-wrap justify-between h-auto sm:w-full gap-x-2 px-2' >
      {
          petsArray.map( (pet, index) =>(
            <CardsDiccionary key =  { index } children = { pet.ingles } childrenEs = { pet.espanol } /> 
          ))
      }
    </div>

  )
}

