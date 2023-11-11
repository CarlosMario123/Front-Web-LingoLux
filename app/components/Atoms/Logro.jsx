
import estrella from "../../recursos/start.png"
import Image from "next/image"


export default function Logro({texto}) {
  return (
    <div className='flex items-center justify-center w-64 h-10 bg-gray-200 rounded-none shadow gap-x-2 shadow-black'>
      <Image src={estrella} width={20} height={20}/>
      <p>{texto}</p>
    </div>
  )
}
