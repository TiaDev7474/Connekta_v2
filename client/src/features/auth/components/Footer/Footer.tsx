
import { SocialMediaLogin } from '../SocialMediaLogin/SocialMediaLogin'
import { Link } from 'react-router-dom';


export const Footer = ({ isLogin }: { isLogin: boolean}) => {
   
  return (
    <div>
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
    </div>
  )
}
