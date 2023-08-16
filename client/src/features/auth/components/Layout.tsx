import { NavBar } from '@/components/NavBar'
import React from 'react'
import './styles/layout.scss'

type LayoutProps = {
     children: React.ReactNode,
     title:string
}

export const Layout = ({ children , title }: LayoutProps) => {
  return (
    <React.Fragment>
        <NavBar />
        <main className='layout-auth'>
            <h2 className='title-auth'>{title}</h2>
            {children}
        </main>
    </React.Fragment>
   
  )
}
