import Image from "next/image";
import noti from "../../recursos/notifications.svg";
import io from 'socket.io-client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { contextGlobal } from "./ContextoQuizz";

const socket = io('http://localhost:3002');


export default function Notificacion() {
  const [word, setWord] = useState([]);
  const router = useRouter();
  const { setState, state } = contextGlobal();

  useEffect(() => {
    // Escucha el evento 'wordPairs' y actualiza el estado con las palabras recibidas
    socket.on('word', (newWordPair) => {
        setWord(newWordPair);
      if(newWordPair){
        setState(newWordPair)
      } else {
     
      }
    });

    // Limpiar el evento al desmontar el componente
    return () => {
      socket.off('word');
    };
  }, []);

  const sendToQuizz =()=>{
    router.push(`/quizz`)
  }

  return (
    <div className="absolute top-[10%]">
      {word.length > 0 && (
        <div className="relative flex items-center justify-center w-8 h-8 p-1 text-white bg-red-500 rounded-full left-8 top-3">1</div>
      )}
      <Image src={noti} width={50} height={50} className="p-2 text-white bg-purple-900 rounded-full cursor-pointer" alt="notificacion" onClick={sendToQuizz}/>
    </div>
  );
}
