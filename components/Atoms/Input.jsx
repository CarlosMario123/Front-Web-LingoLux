import React from 'react'

export const Input = ({ inputValue, evento, text }) => {
  return (
    <input
        className = '' 
        type="text"
        value = { inputValue }
        onChange = { evento }
        placeholder = { text }
    />
  )
}
