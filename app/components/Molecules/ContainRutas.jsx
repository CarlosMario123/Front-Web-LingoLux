import { TextTitle } from "../Atoms/Text.Title"
import { CardsRoute } from "./CardsRoute"
import ContainDeslize from "./ContainDeslize"
export default function ContainRutas({arrayTitles}) {
  return (
    <>
    <TextTitle children={'Ruta de Viaje'} />
    <ContainDeslize>
    {arrayTitles.map(({ titulo, descripcion }) => (
        <CardsRoute key={titulo} children={titulo} description={descripcion} />
      ))}
    </ContainDeslize>

    </>
  )
}
