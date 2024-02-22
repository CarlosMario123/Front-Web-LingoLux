import { useState } from "react";
import { useRouter } from "next/navigation";
import { contextGlobal } from "../Atoms/ContextoQuizz";
export const CardsDiccionary = ({ word }) => {
  const router = useRouter();
  const { empezarCargar } = contextGlobal();
  const [id, setId] = useState(word._id);
  const irDiccionarios = () => {
    empezarCargar();
    router.push(`/dictionary/${id}`);
  };
  return (
    <div
      className="flex h-[11rem] rounded-xl shadow-lg card-style w-[15rem] flex-col justify-center items-center overflow-hidden cursor-pointer hover:scale-110 duration-150"
      onClick={irDiccionarios}
    >
      <div className="gradientCard w-full h-12 rotate-[-40deg] relative  top-0 left-[-120px]"></div>
      <img src={word.contenido[0].url} className="w-24 h-24" />
      <p className="mt-2 text-xl font-semibold text-center text-gray-600">
        {" "}
        {word.titulo}{" "}
      </p>
    </div>
  );
};
