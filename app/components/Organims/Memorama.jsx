'use client'
import { useState, useEffect } from 'react'
import { CardMemorama } from '../Molecules/CardMemorama';
import { data } from '@/js/dataMemorama';
import Navbar from '../Molecules/Navbar';

export const Memorama = () => {

    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [unflippedCards, setUnflippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(true); // Nuevo estado
  
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };
  
    useEffect(() => {
      const consumoAPI = async () => {
        try {
          const api = await data();
          console.log("API data:", api); // Agregamos un log aquí
          shuffleArray(api);
          setCards(api);
          setIsLoadingData(false); 
        } catch (err) {
          console.error("Error en el front", err);
        }
      };
    
      console.log("Before API call, cards:", cards); // Agregamos un log aquí
      consumoAPI();
    }, []);
    
    useEffect(() => {
      checkForMatch();
    }, [secondCard]);
  
    const flipCard = (name, number) => {
      if (firstCard.name === name && firstCard.number === number) {
        return 0;
      }
      if (!firstCard.name) {
        setFirstCard({ name, number });
      } else if (!secondCard.name) {
        setSecondCard({ name, number });
      }
      return 1;
    };
  
    const checkForMatch = () => {
      if (firstCard.name && secondCard.name) {
        const match = firstCard.name === secondCard.name;
        match ? disableCards() : unflipCards();
      }
    };
  
    const disableCards = () => {
      setDisabledCards([firstCard.number, secondCard.number]);
      resetCards();
    };
  
    const unflipCards = () => {
      setUnflippedCards([firstCard.number, secondCard.number]);
      resetCards();
    };
  
    const resetCards = () => {
      setFirstCard({});
      setSecondCard({});
    };
  
    const handleSubmit = () => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
  

  return (
    <div className= 'h-screen'>
      <Navbar/>
     <h1 className="mb-2 text-4xl font-bold text-center">Memorama</h1>

     {isLoadingData && ( // Mostrar loader mientras se cargan los datos
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
          <div className="w-16 h-16 border-t-2 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      )}

<div className="grid justify-center grid-cols-6 gap-4">
  {cards.map((card, index) => (
    <CardMemorama
      key={index}
      name={card.nombre}
      number={index}
      frontFace={card.imagen}
      flipCard={flipCard}
      unflippedCards={unflippedCards}
      disabledCards={disabledCards}
      word={card.palabra}
    />
  ))}
</div>


      {isLoading && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50">
          <div className="w-16 h-16 border-t-2 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      )}

        <div className="flex items-center justify-center ">
      {/* Asegura que el contenido esté centrado vertical y horizontalmente */}
      <input
        className="p-3 mt-8 mb-8 text-lg font-bold text-white uppercase bg-blue-800 rounded-md w-30 hover:cursor-pointer"
        type="submit"
        value="Reiniciar"
        onClick={handleSubmit}
      />
    </div>
    </div>
  )
}
