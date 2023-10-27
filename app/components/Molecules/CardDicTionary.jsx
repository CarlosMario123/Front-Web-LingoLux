import manzana from "../../recursos/apple.png"
import Image from "next/image"
export default function CardDictionary({word}) {
  return (
 
        <div className="flex h-[12rem] rounded-md shadow-lg card-style w-[11rem] flex-col justify-center items-center">
       
            <Image src={manzana} width={70} height={70} />
            <p className = "text-center text-gray-600 mt-2 font-semibold"> { word.espanol} </p>
            <p className = "text-center text-gray-600 mt-2 font-semibold"> { word.ingles} </p>
        </div>
  )
}
