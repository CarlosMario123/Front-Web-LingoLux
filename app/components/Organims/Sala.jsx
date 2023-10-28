
import ContainGame from "../Molecules/ContainGame"
import ContainHistory from "../Molecules/ContainHistory"
import Navbar from "../Molecules/Navbar"

export const Sala = () => {
  return (
    <div className="w-screen">
        <Navbar/>
       <ContainGame/>
       <ContainHistory/>
    </div>
  )
}
