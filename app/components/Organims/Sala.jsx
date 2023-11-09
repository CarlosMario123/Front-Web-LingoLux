
import ContainGame from "../Molecules/ContainGame"
import ContainHerramientas from "../Molecules/ContainHerramientas"
import ContainHistory from "../Molecules/ContainHistory"
import Navbar from "../Molecules/Navbar"

export const Sala = () => {
  return (
    <div className="w-full pb-4">
        <Navbar/>
       <ContainGame/>
       <ContainHistory/>
       <ContainHerramientas/>
    </div>
  )
}
