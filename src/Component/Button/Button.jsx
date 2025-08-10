import React from 'react'
import "./Button.scss"

 const Button = (props) => {
    const {buttonName ,type,  className , onClick} =props
  return (
  <button class={`button-glow ${className}`} onClick={onClick} type={type}>{buttonName}</button>
  )
}
export default Button;