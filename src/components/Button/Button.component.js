import React from 'react'

export const Button = ({title, handleClickButton}) => {
  return (
    <div>
      <button onClick={handleClickButton}>{title}</button>
    </div>
  )
}
