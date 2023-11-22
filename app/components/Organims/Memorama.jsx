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
     <h1 className="text-4xl font-bold mb-2 text-center">Memorama</h1>

     {isLoadingData && ( // Mostrar loader mientras se cargan los datos
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-600 border-solid"></div>
        </div>
      )}

      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <CardMemorama
            key={index}
            name={card.nombre}
            number={index}
            frontFace={card.imagen}
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
            word = { card.palabra }
          />
        ))}
      </div>

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-600 border-solid"></div>
        </div>
      )}

        <div className=" flex justify-center items-center ">
      {/* Asegura que el contenido esté centrado vertical y horizontalmente */}
      <input
        className="mt-8 mb-8 w-30 bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer rounded-md"
        type="submit"
        value="Reiniciar"
        onClick={handleSubmit}
      />
    </div>
    </div>
  )
}
