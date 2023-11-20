import manzana from "../../recursos/apple.png"
import Image from "next/image"
export default function CardDictionary({word}) {
  return (
 
        <div className="flex h-[12rem] rounded-md shadow-lg card-style sm:w-[11rem] w-64 flex-col justify-center items-center">
       
            <img src={word.url} width={80} height={75} />
            <p className = "mt-2 font-semibold text-center text-gray-600"> { word.contenidoEsp} </p>
            <p className = "mt-2 font-semibold text-center text-gray-600"> { word.contenidoIng} </p>
        </div>
  )
}
