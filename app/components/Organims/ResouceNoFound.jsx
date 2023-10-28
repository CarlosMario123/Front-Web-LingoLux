import Link from "next/link"

export default function ResouceNoFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen color-gradient">
       <p className="w-full text-5xl font-black text-center text-white">Opps el recurso no fue encontrado o hubo un error al cargar el recurso</p>
       <Link className="px-3 py-2 mt-6 text-2xl font-semibold text-center text-white bg-yellow-600 rounded-full" href={"/home"}>volver al menu de inicio</Link>
    </div>
  )
}
