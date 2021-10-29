import React, { useState } from 'react'
import InputTypeColor from './InputTypeColor'

export default {
  component: InputTypeColor,
  title: 'Micro Components/Input',
}

export const TypeColor = () => {
  const [color, setColor] = useState('#000000')

  const handleChange = (color) => {
    return setColor(color)
  }

  return <InputTypeColor text="Fundo" color={color} onChange={handleChange} />
}
