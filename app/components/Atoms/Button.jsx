import React from 'react'

export function Button({ children,onClick}) {
  return (
    <button className = 'w-56 p-2 text-white duration-300 ease-in-out border rounded-md gradientCard trasition' onClick={onClick}>
        { children } {/* //? Utilizamos Children para poner el texto del boton */}
    </button>
  )
}
