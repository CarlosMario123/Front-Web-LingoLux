import Logro from "../Atoms/Logro";


export default function Logros() {
  return (
    <div className="md:w-[45.5rem] sm:h-[15rem] card-style flex flex-col items-center py-2 gap-y-2 mt-6 w-11/12 mb-10 xl:w-[58.5rem]">
      <h1 className="w-full text-2xl font-semibold text-center">Logros</h1>
      <div className="flex flex-wrap justify-center w-full px-4 pb-2 mt-2 overflow-y-auto gap-x-4 gap-y-3">
        <Logro texto={"Novato de verbos"}/>
        <Logro texto={"Aprendiz de libros"}/>
        <Logro texto={"Escritor en progreso"}/>
      </div>
    </div>
  )
}
