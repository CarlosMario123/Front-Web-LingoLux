

export default function CardXL({contenido,callback}) {

  const realizarEvento = ()=>{
    callback(contenido)
  }
  return (
    <div className="card-style sm:w-[20rem] h-40 flex flex-col items-center justify-center w-[15rem]" onClick={realizarEvento}>
            <img src= {contenido.url} className="w-[6rem] h-[6rem]"/>
            <p className="text-2xl font-semibold">{contenido.name}</p>
    </div>
  )
}
