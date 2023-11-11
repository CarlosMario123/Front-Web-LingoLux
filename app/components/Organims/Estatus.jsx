import Clasificacion from "../Molecules/Clasificacion"
import Estadistica from "../Molecules/Estadistica"
import Logros from "../Molecules/Logros"
import Navbar from "../Molecules/Navbar"

export default function Estatus() {
  return (
    <div className="w-full ">
        <Navbar/>
        <h1 className="py-2 text-2xl font-black text-center">Estatus</h1>
        <main className="flex flex-col flex-wrap items-center justify-center w-full px-2 mt-4 sm:px-6">
          <section  className="flex flex-wrap justify-center w-full gap-x-20 gap-y-5">
          <Clasificacion/>
         <Estadistica/>
         
          </section>
           <Logros/>
        </main>
    </div>
  )
}
