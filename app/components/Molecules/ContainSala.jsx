import ContainDeslize from "./ContainDeslize" 
import { CardsDiccionary } from "./CardsDiccionary"
import { TextTitle } from "../Atoms/Text.Title"
import { CardsDay } from "./CardsDay"

export const ContainSala = () => {

    const arrayGames = [ //* This is a ObjectArray
    {
      name: 'Game1',
      description: 'This is a funny game interactive 1' 
    },
    {
      name: 'Game2',
      description: 'This is a funny game interactive 2' 
    },
    {
      name: 'Game3',
      description: 'This is a funny game interactive 3' 
    },
    {
      name: 'Game4',
      description: 'This is a funny game interactive 4' 
    },
    {
      name: 'Game5',
      description: 'This is a funny game interactive 5' 
    },
    {
      name: 'Game6',
      description: 'This is a funny game interactive 6' 
    },
    {
        name: 'Wenderly Kasty Mariel Ardón Alvizurez',
        description: "This is te most beautiful girl what my eyes see in the world :3 "  
    },
  ]

  const arrayHistory = [ 'A Sunny Day', 'A day at the Park', 'The Old Diary', '  ' ]

  const arrayTools = [ 'Recursos Externos', 'Mi librea', 'Quiz rapido' ]
    
  return (
    <div>

        <div className = '' >

            <TextTitle children = {'Juegos'} aligned = { 'text-center' }/>

            <ContainDeslize>
                {
                    arrayGames.map( (game, index) =>(
                        <CardsDiccionary key = { index } children = { game.name  } childrenEs = { game.description } />
                    ))
                }
            </ContainDeslize>
        </div>

        <div className = ''>
            <TextTitle children = { 'Historias cortas' } aligned = { 'text-center' }  />
            <ContainDeslize>
                {
                    arrayHistory.map( (hisyory, index) =>(
                        <CardsDiccionary key = { index } children = { hisyory}/>
                    ) )
                }
            </ContainDeslize>
        </div>

        <div className = '' >
            <TextTitle children = { 'Herramientas' } aligned = { 'text-center' }/>
            <ContainDeslize>
                {
                    arrayTools.map( (tool, index) =>(
                        <CardsDay key = { index } childrenEng = { tool }/>
                    ))
                }
            </ContainDeslize>
        </div>

    </div>
  )
}
