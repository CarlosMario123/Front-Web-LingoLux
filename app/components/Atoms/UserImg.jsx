

export default function UserImg({url = "https://raw.githubusercontent.com/CarlosMario123/VisualizadorDeImagen/main/imgExamples/pablo.jpg"}) {
  return (
    <div className="w-10 h-10 rounded-full">
        <img src={url} alt="" className="w-16 h-10 rounded-full hover:cursor-pointer"/>
    </div>
  )
}
