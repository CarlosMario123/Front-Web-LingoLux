import Image from "next/image"

export default function CardExaple({example}) {
  return (
    <div className="flex flex-col items-center">
       <img src={example} className="w-32 h-32"/>
      
    </div>
  )
}
