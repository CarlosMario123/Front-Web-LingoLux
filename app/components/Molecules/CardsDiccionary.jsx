import Image from "next/image"
export const CardsDiccionary = ({word}) => {
  return (
    <div className="flex h-[12rem] rounded-md shadow-lg card-style w-[11rem] flex-col justify-center items-center">
   
        <Image src={word.url} width={70} height={70} />
        <p className = "text-center text-gray-600 mt-2 font-semibold"> { word.titulo} </p>
    </div>
  )
}
