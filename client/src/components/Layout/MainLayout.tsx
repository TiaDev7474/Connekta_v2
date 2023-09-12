import React from 'react'
import { NavHeader } from '../NavHeader/NavHeader'
import { AsideNav } from '../AsideNav/AsideNav'

type MainLayoutProps = {
    children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='w-full px-[5%]'>
        <header>
            <NavHeader />
        </header>
         <main className='flex justify-between'>
            <aside>
                <AsideNav />
            </aside>
            <section>
               { children }
            </section>
            <aside>

            </aside>
         </main>
        
       
    </div>
  )
}
