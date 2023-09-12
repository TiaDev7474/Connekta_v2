import React from 'react'
import './Button.scss'
import { Link, To } from 'react-router-dom';

export interface IButtonPros {
    label?: string,
    type?:string,
    Icon?: React.ReactNode,
    to?: To,
    className?:string

}
export const Button: React.FC<IButtonPros> = ({ label , Icon = "", type ,to=''}) => {
   const className = type ==="primary" ? "btn btn-primary": "btn btn-secondary"
   console.log("render",)
  return (
    <Link 
       
        to={to}>
        <button
            className={`${className} link`}
        >
           <span>  { label }</span>
        
            {Icon }
        
        </button>
    </Link>
  )
}
