
import Perfil from "./Perfil";
import Porcentajes from "./Porcentajes";




export default function Estadistica() {
    const url2 = "https://github.com/CarlosMario123/VisualizadorDeImagen/blob/main/imgExamples/pablo.jpg?raw=true"
  return (
    <div className="sm:w-[30rem] sm:h-72 bg-white card-style flex flex-col items-center overflow-y-auto gap-y-2 w-11/12 pb-4 pt-2">
       <h1 className="w-full text-center text-xl font-black ">Estadisticas</h1>
       <div className="w-full flex px-6 items-center mt-3 justify-center gap-x-10 flex-wrap-reverse gap-y-4">
        <Porcentajes/>
        <Perfil start={5} correo={"pablo@gmail.com"} url={url2}/>
       </div>
    </div>
  )
}
