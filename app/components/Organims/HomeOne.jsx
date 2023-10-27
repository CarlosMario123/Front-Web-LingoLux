import { CardsRoute } from "../Molecules/CardsRoute"
import { CardsDiccionary } from "../Molecules/CardsDiccionary"
import { CardsDay } from "../Molecules/CardsDay"
import { TextTitle } from "../Atoms/Text.Title"
import ContainRutas from "../Molecules/ContainRutas"
import ContainDiccionary from "../Molecules/ContainDiccionary"
import Navbar from "../Molecules/Navbar"


//imagenes
import utilesI from"../../recursos/utiles-1.png"

export const HomeOne = () => {

    const arrayTitles = [
        {
          titulo: "Mis primeras palabras",
          url: utilesI
        },
        {
          titulo: "Aprendiendo a contar",
          url: utilesI
        },
        {
          titulo: "Presente Simple 1",
          url: utilesI
          }
          ,
        {
          titulo: "Presente Simple 2",
          url: utilesI
          }
          ,
        {
          titulo: "Presente Simple 3",
          url: utilesI
          }
          ,
        {
          titulo: "Presente Simple 4",
          url: utilesI
          }
          ,
        {
          titulo: "Presente Simple 5 ",
          url: utilesI
          }
      ]

      const arrayDictionry = [ {
        titulo: "Presente Simple 51",
        url: utilesI
        }
        ,
        {
          titulo: "Presente Simple 25",
          url: utilesI
          }
          , {
            titulo: "Presente Simple 43",
            url: utilesI
            }
            , {
              titulo: "Presente Simple 4",
              url: utilesI
              }
              , {
                titulo: "Presente Simple 34",
                url: utilesI
                }
                , {
                  titulo: "Presente Simple 21",
                  url: utilesI
                  }
                  , {
                    titulo: "Presente Simple 5",
                    url: utilesI
                    }
                    , {
                      titulo: "Presente Simple 6",
                      url: utilesI
                      }
                      , {
                        titulo: "Presente Simple 7",
                        url: utilesI
                        }
              ]

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
