import React from 'react'

export default function Button({ children }) {
  return (
    <button className = 'p-2 border mr-50 principal-color rounded-md trasition duration-300 ease-in-out hover:text-white' >
        { children } //? Utilizamos Children para poner el texto del boton
    </button>
  )
}
