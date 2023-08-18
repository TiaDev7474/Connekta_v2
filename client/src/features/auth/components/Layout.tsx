import { NavBar } from '@/components/NavBar'
import React from 'react'
import './styles/layout.scss'
import { SocialMediaLogin } from './SocialMediaLogin/SocialMediaLogin'
import { Link } from 'react-router-dom'

type LayoutProps = {
     children: React.ReactNode,
     title:string
}

export const Layout = ({ children , title }: LayoutProps) => {
    const isLogin = title.toLocaleLowerCase() === 'log in';

  return (
    <React.Fragment>
        <NavBar />  
        <main className='layout-auth'>
            <h2 className='title-auth'>{title}</h2>
            {children}
            <div className='separator'>
               <div className='separator-line'></div>
               <div>Or</div>
               <div className='separator-line line-right'></div>  
            </div>
            <div>
                <SocialMediaLogin />
            </div>
            <div className='layout-footer'>
                 <span className='link-question'>
                      { isLogin ? 'Don\'t have an account ?': 'Already have an account?' }  
                 </span>
                 <Link 
                    to={isLogin ? '/auth/register': '/auth/login'}
                    className='link-back'
                  >
                           {isLogin ? 'Sign Up': 'Log In' }
                  </Link> 
            </div>
        </main>
    </React.Fragment>
   
  )
}
