import Navbar from "../Molecules/Navbar";


export default function Cuaderno() {
  return (
    <div className="flex flex-col items-center w-full h-screen">
        <Navbar/>
        <div className="flex flex-col items-center w-full h-full px-6">
        <h1 className="py-4 text-2xl font-bold text-center">Libreta</h1>
        <div className="flex items-center justify-center w-full">
            <div className="w-4 h-[30rem] bg-purple-950"></div>
             <textarea className="bg-white h-[30rem] w-8/12"></textarea>
        </div>
        <button className="w-32 text-white gradient1">Guardar</button>
        </div>
    
    </div>
  )
}
