import { Button } from '@/Element/Button'
import { SwitchButton } from '@/Element/SwitchButton'
import './Navbar.scss'

export const NavBar = () => {
  return (
     <nav className='nav'>
         <div className='nav-logo'>
              <h2>Connekta</h2>
         </div>
         <div className='nav-link'>
              <div className='nav-switch'>
                  <SwitchButton />
              </div>
              <div className='nav-btn'>
                   <Button label='Create an account' type='primary' to="/auth/register"/>
                   <Button label='Login' type='secondary' to='/auth/login' />
              </div>  
         </div> 
     </nav>
  )
}
