

export default function CardXL({contenido}) {
  return (
    <div className="card-style w-[20rem] h-40 flex flex-col items-center justify-center">
            <img src= {contenido.url} className="w-[6rem] h-[6rem]"/>
            <p className="font-semibold text-2xl">{contenido.name}</p>
    </div>
  )
}
