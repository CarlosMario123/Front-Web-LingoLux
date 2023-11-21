import React from 'react'

const Image = ({ src, word }) => {
  return (
    <>
    <img className='h-10 w-10' src={src} alt=""  />
    <p> { word } </p>
    </>
  )
}

export default Image