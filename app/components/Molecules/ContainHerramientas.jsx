"use client"
import ContainDeslize from "./ContainDeslize"
import CardXL from "./CardXL"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ContainHerramientas() {
    const router = useRouter();
    const [datos,setDatos] = useState(
        [
            {
                name:"Recursos externos",
                url:"https://cdn-icons-png.flaticon.com/512/4645/4645220.png",
                urlPage:"/recursosExt"
            },
            {
                name:"Apuntes",
                url:"https://images.vexels.com/media/users/3/128313/isolated/preview/01fb3e375286d98cbc46c50e917db249-icono-plano-de-cuaderno.png",
                urlPage:"/recursosExt"
            },
            {
                name:"Quiz rapido",
                url:"  https://i.pinimg.com/originals/ff/63/27/ff63270e35d47f7040888832a2e64905.png",
                urlPage:"/recursosExt"
            }
            
          
        ])

        //funcion que permite el redirecionamiento a otra ruta que se pasara por medio de un callback al componente <CardXl/>
        const redireccionar = (contenido)=>{

            router.push(contenido.urlPage)
        }
  return (
    <div className='mt-10'> 
    <div className="flex items-center justify-between w-full mb-8">
  <h2 className='text-center w-full font-black text-3xl'>Herramientas</h2>
    </div>

<ContainDeslize>
         {
            datos.map( (e,i)=> <CardXL key={i} contenido={e} callback={redireccionar}/>)
         }
       </ContainDeslize>
       
    </div>
  )
}
