import React from 'react'
import './Button.scss'
type ButtonPros = {
    label: string,
    type:string,
    Icon?: React.ReactNode
}
export const Button: React.FC<ButtonPros> = ({ label , Icon = "", type }) => {
   const className = type ==="primary" ? "btn btn-primary": "btn btn-secondary"
   console.log("render",)
  return (
    <button
        className={className}
    >
        { label }
         {Icon }
    </button>
  )
}
