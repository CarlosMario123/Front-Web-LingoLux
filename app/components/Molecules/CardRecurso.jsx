

export default function CardRecurso({recurso}) {
  return (
    <div className="bg-white py-2 px-2 flex flex-col gap-y-3 w-[15rem] h-[8rem] justify-center items-center rounded-md hover:scale-110">
      <p className="text-xl font-semibold text-black">{recurso.tema}</p>
      <a href={recurso.link} className="w-32 py-1 font-medium text-center text-white bg-purple-500 rounded-md" target="_blank" >visitar</a>
    </div>
  )
}
