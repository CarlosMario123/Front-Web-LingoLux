import useWindowWidth from "@/hooks/useWindowWidth"

export default function CardXL({contenido,callback}) {
    const windowWidth = useWindowWidth();

    const smallSize = (windowWidth < 1237) ? 15:20;
  const realizarEvento = ()=>{
    callback(contenido)
  }
  return (
    <div className={`card-style sm:w-[20rem] h-40 flex flex-row cursor-pointer w-[15rem] ${smallSize ? "sm:w-[17rem]" : "sm:w-[20rem]"}`} onClick={realizarEvento}>
        <div className='relative w-4 h-full gradientCard rounded-l-md'></div>
        <div className="flex flex-col items-center justify-center w-full">
        <img src= {contenido.url} className="w-[6rem] h-[6rem]"/>
            <p className="text-2xl font-semibold">{contenido.name}</p>
        </div>
           
    </div>
  )
}
