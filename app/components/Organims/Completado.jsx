

export default function Completado({evento1,evento2}) {
  console.log("entro")
    const handleYes = ()=>{
    
        evento1(true)
    }

    const handleNot = ()=>{
        evento2()
    }
  return (
    <div className="flex flex-col items-center w-full h-screen">
        <h1 className="w-full mt-6 mb-16 font-mono text-3xl font-black text-center">¿quieres comenzar con las preguntas?</h1>
       <button className="text-white bg-green-600 w-[20rem] py-1 px-4 text-2xl mb-4" onClick={handleYes}>Si, me siento seguro</button>
       <button className="text-white bg-blue-600 w-[20rem] py-1 px-4 text-2xl mb-4" onClick={handleNot}>No, quiero repetir los temas</button>
    </div>
  )
}
