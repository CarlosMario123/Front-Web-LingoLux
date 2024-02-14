"use client"

import React, { useState, useEffect } from 'react';

const palabrasIniciales =["apple", "banana", "orange", "grape", "strawberry", "pineapple", "watermelon", "kiwi", "melon", "peach", "plum", "pear", "cherry", "blueberry", "raspberry", "blackberry", "lemon", "lime", "coconut", "mango", "papaya", "apricot", "fig", "nectarine", "cranberry", "tangerine", "avocado", "guava", "persimmon", "dragonfruit"]
const indiceInicial = 0;

export const WordGuess = () => {
  const [puntos,setPuntos] = useState(0);
  const [palabrasOriginales, setPalabrasOriginales] = useState(palabrasIniciales);
  const [palabraOriginal, setPalabraOriginal] = useState(palabrasOriginales[indiceInicial]);
  const [palabraDesordenada, setPalabraDesordenada] = useState('');
  const [valoresEntrada, setValoresEntrada] = useState([]);
  const [indiceEntradaActual, setIndiceEntradaActual] = useState(0);
  const [vidas, setVidas] = useState(6);
  const [mensaje, setMensaje] = useState('');
  const [indiceActual, setIndiceActual] = useState(indiceInicial);
  const [juegoGanado, setJuegoGanado] = useState(false)

  useEffect(() => {
    // Desordena la palabra al cargar el componente
    const desordenarPalabra = () => {
      let palabraDesordenada = '';
      do {
        palabraDesordenada = palabraOriginal.split('').sort(() => Math.random() - 0.5).join('');
      } while (palabraDesordenada === palabraOriginal);

      setPalabraDesordenada(palabraDesordenada);
    };

    setValoresEntrada(Array(palabraOriginal.length).fill(''));

    desordenarPalabra();
  }, [palabraOriginal]);

  const manejarCambioEntrada = (event) => {
    const valorActual = event.target.value;
    console.log("evento",event.target.value)
   
    const valoresEntradaActualizados = [...valoresEntrada];
    valoresEntradaActualizados[indiceEntradaActual] = valorActual;
    setValoresEntrada(valoresEntradaActualizados);
    if(event.target.value == ""){
      return
    }

    if (valorActual === palabraOriginal[indiceEntradaActual]) {
      if (indiceEntradaActual === palabraOriginal.length - 1) {
        // Adivinó la palabra, elimina la palabra del arreglo
        setMensaje(`¡Correcto! La palabra es ${palabraOriginal}`);
        setJuegoGanado(true)
        const nuevasPalabras = palabrasOriginales.filter((palabra) => palabra !== palabraOriginal);
        setPalabrasOriginales(nuevasPalabras);

        if (nuevasPalabras.length > 0) {
          reiniciarJuego();
         
        } else {
          setMensaje('¡Felicidades, has adivinado todas las palabras!');
        }
      } else {
        setIndiceEntradaActual(indiceEntradaActual + 1);
        setMensaje('¡Letra correcta! Avanza al siguiente cuadro.');
        setPuntos(puntos + 1)
      }
    } else {
      manejarError();
    }
  };

  const manejarError = () => {
    setVidas(vidas - 1);
    setMensaje('Intenta de nuevo. La letra no es correcta.');
    if (vidas === 1) {
      setMensaje('¡Perdiste! Te quedaste sin vidas.');
      setPuntos(0)
    }
  };

  const reiniciarJuego = () => {
    if (juegoGanado) {
        // Si el juego se ganó, avanzar al siguiente
        const nuevoIndice = Math.floor(Math.random() * palabrasOriginales.length);
        setIndiceActual(nuevoIndice);
        setPalabraOriginal(palabrasOriginales[nuevoIndice]);
        setIndiceEntradaActual(0);
        setValoresEntrada(Array(palabrasOriginales[nuevoIndice].length).fill(''));
        setMensaje('');
        setJuegoGanado(false); // Reiniciar el estado del juego ganado
      } else {
        // Si el juego se reinicia después de perder
        setVidas(3);
        const nuevoIndice = Math.floor(Math.random() * palabrasOriginales.length);
        setIndiceActual(nuevoIndice);
        setPalabraOriginal(palabrasOriginales[nuevoIndice]);
        setIndiceEntradaActual(0);
        setValoresEntrada(Array(palabrasOriginales[nuevoIndice].length).fill(''));
        setMensaje('');
      }
  };

  const manejarEliminar = () => {
    const valoresEntradaActualizados = [...valoresEntrada];
    valoresEntradaActualizados[indiceEntradaActual] = ''; // Elimina la letra
    setValoresEntrada(valoresEntradaActualizados);
  };

  const cuadrosEntrada = valoresEntrada.map((valor, indice) => (
    <div key={indice} className="relative inline-block">
      <input
      maxlength = "1"
        type="text"
        value={valor}
        onChange={manejarCambioEntrada}
        disabled={indice !== indiceEntradaActual || vidas === 0}
        className='w-10 text-center text-black transition-all duration-300 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500'
      />
    </div>
  ));

  return (
<div className='flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-gray-400 to-slate-200'>
   <p className='absolute px-2 py-1 text-2xl border-2 top-10 left-10 border-sky-500'>Puntos: {puntos}</p>
      <h1 className='mb-6 text-3xl font-bold'>Adivina la Palabra Desordenada</h1>
      <div className='flex flex-row items-center justify-center w-full mb-8 space-x-4'>
        <p className='p-2 font-bold bg-black rounded-full bg-opacity-80'>Palabra Desordenada: {palabraDesordenada}</p>
        <p className='p-2 font-bold bg-black rounded-full bg-opacity-80'>Vidas restantes: {vidas}</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        {cuadrosEntrada}
      </div>
      <button 
        onClick={reiniciarJuego} 
        className='p-3 mt-8 text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none'
        disabled = { vidas === 3 } 
      >
        Reiniciar
      </button>
      <p className='mt-8 text-xl text-black'>{mensaje}</p>
    </div>
  )
}
