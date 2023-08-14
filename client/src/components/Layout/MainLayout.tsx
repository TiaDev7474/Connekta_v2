import React from 'react'

type MainLayoutProps = {
    children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
        <button className='button'>
              Button 
        </button>
        <button className='button secondary'>
              Button 
        </button>
        <h1 className='h1'>
             Bienvenue sur connekta
        </h1>
        { children }
    </div>
  )
}
