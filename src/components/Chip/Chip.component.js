import React from 'react'
import { ChipStyled } from './Chip.styled'

export const Chip = ({name, color}) => {
  return (
    <ChipStyled color={color}>
      <div className='chip__name'>{name}</div>
    </ChipStyled>
  )
}
