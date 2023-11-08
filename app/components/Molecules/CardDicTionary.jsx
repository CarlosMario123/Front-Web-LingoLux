import manzana from "../../recursos/apple.png"
import Image from "next/image"
export default function CardDictionary({word}) {
  return (
 
        <div className="flex h-[12rem] rounded-md shadow-lg card-style sm:w-[11rem] w-64 flex-col justify-center items-center">
       
            <Image src={manzana} width={70} height={70} />
            <p className = "mt-2 font-semibold text-center text-gray-600"> { word.espanol} </p>
            <p className = "mt-2 font-semibold text-center text-gray-600"> { word.ingles} </p>
        </div>
  )
}
