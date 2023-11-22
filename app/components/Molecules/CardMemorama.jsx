'use client'

import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from '../../recursos/quest.png'
import Imagen from "../Atoms/Image";
import Image from "next/image";
export const CardMemorama = ({
    name, number, frontFace, flipCard, unflippedCards, disabledCards, word
}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    console.log(frontFace);

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
    <div className=" inline-block m-2 h-32 w-32 cursor-pointer px-2">

        <ReactCardFlip isFlipped = {isFlipped}>

            <Image width={144} heigth={144} src = { backFace }  onClick={ hasEvent ? handleClick : null } 
            />

            <Imagen
                src = { frontFace }
                 onClick = { hasEvent ? handleClick : null  }
                 word = { word }
            />

        </ReactCardFlip>
    </div>
  )
}
