
import estrella from "../../recursos/start.png"

export default function Start(Props) {
  return (
    <div className="flex flex-row items-center">
      <p>{Props.cantidad}</p>
      <img src={estrella} alt="" className="w-10 h-10"/>
    </div>
  )
}
