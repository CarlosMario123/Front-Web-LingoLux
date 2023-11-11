

export default function Porcentaje({name}) {
  return (
    <div className="w-32">
      <p className="font-semibold">{name}</p>
      <progress className="progress progress-primary w-32 h-3" value="50" max="100"></progress>
    </div>
  )
}
