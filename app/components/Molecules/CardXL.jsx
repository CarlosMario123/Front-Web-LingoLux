import useWindowWidth from "@/hooks/useWindowWidth"

export default function CardXL({contenido,callback}) {
    const windowWidth = useWindowWidth();

    const smallSize = (windowWidth < 1237) ? 15:20;
  const realizarEvento = ()=>{
    callback(contenido)
  }
  return (
    <div className={`card-style sm:w-[20rem] h-40 flex flex-row  w-[15rem] ${smallSize ? "sm:w-[17rem]" : "sm:w-[20rem]"}`} onClick={realizarEvento}>
        <div className='w-4 h-full gradientCard rounded-l-md relative'></div>
        <div className="flex flex-col justify-center w-full items-center">
        <img src= {contenido.url} className="w-[6rem] h-[6rem]"/>
            <p className="text-2xl font-semibold">{contenido.name}</p>
        </div>
           
    </div>
  )
}
