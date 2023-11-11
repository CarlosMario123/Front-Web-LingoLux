import Lugar from "../Atoms/Lugar";


export default function Clasificacion() {
  return (
    <div className="w-96 h-72 bg-white card-style flex flex-col items-center overflow-y-auto gap-y-2">
     <h1 className="w-full text-center text-xl font-black py-2">Clasificacion</h1>
      <Lugar texto = "1-Pablo Cesar"/>
      <Lugar texto = "2-Pablo Cesar"/>
      <Lugar texto = "3-Pablo Cesar"/>
    </div>
  )
}
