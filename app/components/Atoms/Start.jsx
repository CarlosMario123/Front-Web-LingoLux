
import estrella from "../../recursos/start.png"
import Image from "next/image"
export default function Start(Props) {
  return (
    <div className="flex flex-row items-center justify-center">
      <p className={` mr-1 ${Props.color}`}>{Props.cantidad}</p>
    <Image src={estrella} width={25} height={20}/>
    </div>
  )
}
