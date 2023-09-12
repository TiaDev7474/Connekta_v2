import { Button } from '@/Element/Button'
import { SwitchButton } from '@/Element/SwitchButton'
import './Navbar.scss'

export const NavBar = () => {
  return (
     <nav className='nav'>
         <div className='nav-logo'>
              <h2 className='naw-logo'>Connekta</h2>
         </div>
         <div className='nav-link'>
              <div className='nav-switch'>
                  <SwitchButton />
              </div>
              <div className='nav-btn'>
                   <Button label='Sign Up' type='primary' to="/auth/register"/>
                   <Button label='Login' type='secondary' to='/auth/login' />
              </div>  
         </div> 
     </nav>
  )
}
