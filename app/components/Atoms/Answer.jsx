import { useEffect, useState } from "react";
export default function Answer({respuesta,evaluar}) {
  const [answer, setAnswer] = useState(respuesta);
  useEffect(()=>{
      setAnswer(respuesta)
  },[respuesta])
  const evaluateClick = ()=>{
      evaluar(answer);
  }
  return (
    <button className="p-2 text-3xl text-center card-style w-72 hover:bg-sky-200" onClick={evaluateClick}>
        {answer}
    </button>
  )
}
