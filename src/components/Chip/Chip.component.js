import React from 'react'
import { ChipStyled } from './Chip.styled'

export const Chip = ({name, color, styled}) => {
  return (
    <ChipStyled color={color} styled={styled}>
      <div className='chip__name'>{name}</div>
    </ChipStyled>
  )
}
