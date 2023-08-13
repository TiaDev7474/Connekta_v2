import React from 'react'

type LayoutProps = {
     children: React.ReactNode,
     title:string
}

export const Layout = ({ children , title }: LayoutProps) => {
  return (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
  )
}
