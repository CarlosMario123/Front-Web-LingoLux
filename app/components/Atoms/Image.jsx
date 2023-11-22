import React from 'react'

const Imagen = ({ src, word }) => {
  return (
    <>
    <img className=' h-36 w-36 rounded-md' src={src} alt=""  />
    <p className = ' text-center uppercase font-bold '> { word } </p>
    </>
  )
}

export default Imagen