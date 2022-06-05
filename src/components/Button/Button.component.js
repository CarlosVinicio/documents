import React from 'react'
import { ButtonStyled } from './Button.styled'

export const Button = ({title, handleClickButton}) => {
  return (
    <ButtonStyled>
      <button onClick={handleClickButton}>{title}</button>
    </ButtonStyled>
  )
}
