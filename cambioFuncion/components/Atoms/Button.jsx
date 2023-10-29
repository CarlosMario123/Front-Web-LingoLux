import React from 'react'

export function Button({ children }) {
  return (
    <button className = ' bg-[#00D1FF] text-white w-56 p-2 border rounded-md trasition duration-300 ease-in-out hover:bg-[#03abd1]' >
        { children } {/* //? Utilizamos Children para poner el texto del boton */}
    </button>
  )
}
