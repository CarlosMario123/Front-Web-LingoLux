'use client'

import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from '../../recursos/quest.png'
import Image from "../Atoms/Image";
export const CardMemorama = ({
    name, number, frontFace, flipCard, unflippedCards, disabledCards, word
}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    useEffect(() => {
        if (unflippedCards.includes(number)) {
          setTimeout(() => setIsFlipped(false), 700);
        }
      }, [unflippedCards])
    
      useEffect(() => {
        if (disabledCards.includes(number)) {
          setHasEvent(false);
        }
      }, [disabledCards])
    
      const handleClick = e => {
        const value = flipCard(name, number);
        if (value !== 0) {
          setIsFlipped(!isFlipped);
        }
      }

  return (
    <div className=" inline-block m-2 h-10 w-10 cursor-pointer">

        <ReactCardFlip isFlipped = {isFlipped}>

            <img className = " h-10 w-10" src = { backFace } alt="back-face" onClick={ hasEvent ? handleClick : null } 
            />

            <Image
                src = { frontFace }
                 onClick = { hasEvent ? handleClick : null  }
                 word = { word }
            />

        </ReactCardFlip>
    </div>
  )
}
