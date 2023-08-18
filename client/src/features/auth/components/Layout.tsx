import { NavBar } from '@/components/NavBar'
import React from 'react'
import './styles/layout.scss'

type LayoutProps = {
     children: React.ReactNode,
     title:string,
     icon: React.ReactNode,
     description:string
}

export const Layout = ({ children , title ,icon, description}: LayoutProps) => {
   
  

  return (
    <React.Fragment>
        <NavBar />  
        <main className='layout-auth'>
            <div className='layout-brand'>
                <span className='layout-icon'>{icon}</span>
                <h2 className='title-auth'>{title}</h2>
                <p className='layout-paragraph'>{description}</p>
            </div>
           
            {children}
        </main>
    </React.Fragment>
   
  )
}
