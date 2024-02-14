"use client";
import manzana from "../../recursos/apple.png";
import Image from "next/image";
import { useState } from "react";

export default function CardDictionary({ word }) {
  const [speaking, setSpeaking] = useState(false);

  const speakWord = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word.contenidoIng);

    // Establece el idioma de la voz en inglés
    utterance.lang = "en-US";

    synth.cancel(); // Cancelar cualquier reproducción previa antes de comenzar una nueva

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);

    synth.speak(utterance);
  };

  return (
    <div
      className="flex h-[12rem] rounded-md shadow-lg card-style sm:w-[11rem] w-64 flex-col justify-center items-center hover:scale-105"
      onMouseEnter={speakWord}
    >
      <img src={word.url} width={80} height={75} />
      <p className="mt-2 font-semibold text-center text-gray-600">{word.contenidoEsp}</p>
      <p className="mt-2 font-semibold text-center text-gray-600">{word.contenidoIng}</p>
      {speaking && <span>🔊</span>}
    </div>
  );
}
