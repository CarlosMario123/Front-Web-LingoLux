

export default function CardRecurso({recurso}) {
  return (
    <div className="color-basic py-2 px-2 flex flex-col gap-y-3 w-[12rem] h-[7rem] justify-center items-center rounded-md">
      <p className="text-white">{recurso.tema}</p>
      <a href={recurso.link} className="text-white bg-green-500 py-1 px-4 rounded-sm" target="_blank" >visitar</a>
    </div>
  )
}
