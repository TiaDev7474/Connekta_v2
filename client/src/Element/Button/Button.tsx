import React from 'react'
import './Button.scss'
import { Link, To } from 'react-router-dom';

type ButtonPros = {
    label?: string,
    type?:string,
    Icon?: React.ReactNode,
    to?: To,

}
export const Button: React.FC<ButtonPros> = ({ label , Icon = "", type ,to=''}) => {
   const className = type ==="primary" ? "btn btn-primary": "btn btn-secondary"
   console.log("render",)
  return (
    <button
        className={className}
    >
      <Link 
          className='link'
          to={to}>
      { label }
         {Icon }
      </Link>
       
    </button>
  )
}
