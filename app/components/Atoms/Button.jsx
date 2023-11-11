import React from 'react'

export function Button({ children }) {
  return (
    <button className = ' gradientCard text-white w-56 p-2 border rounded-md trasition duration-300 ease-in-out' >
        { children } {/* //? Utilizamos Children para poner el texto del boton */}
    </button>
  )
}
