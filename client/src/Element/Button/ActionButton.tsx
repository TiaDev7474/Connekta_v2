import React from 'react'
import './Button.scss'
import { IButtonPros } from './Button'

interface IActionButton extends IButtonPros {
     state: boolean
}

export const ActionButton: React.FC<IActionButton> = ({ label , Icon = "", type , state}) => {
   const className = type ==="primary" ? "btn btn-primary": "btn btn-secondary"
   console.log(state)
  return (
   
        <button
            className={`${className} link`}
            disabled={state}
        >
          {label}
          {Icon}
        
        </button>
   
  )
}