import Start from "../Atoms/Start";



export default function Perfil({url,correo,start}) {
  return (
    <div className="w-[12rem] h-[12rem] card-style flex flex-col items-center py-2 gap-y-2">
         <img src={url} alt="" className="w-24 h-24 rounded-full" />
         <p>{correo}</p>
         <Start cantidad={5}  color ="text-black" />
    </div>
  )
}
