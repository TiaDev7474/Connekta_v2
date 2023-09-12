
import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.jpg';
import { Notification } from '@/Element/Notification/Notification';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';

export const NavHeader = () => {
  
  return (
    <nav className='w-full flex py-5'>
        <div className=' flex items-center '>
           <span>
               <img src={logo} alt='' className='w-10'/>
           </span>
            <span className='text-xl font-bold'>ONNECKTA</span>
        </div>
        
        <div className='flex-1 flex justify-end gap-5'>
            <div className='flex-1 flex justify-end items-center gap-5'>
                <Notification />
                {/* <SwitchButton/> */}
            </div>
            <ProfileInfo  
                 avatar={avatar} 
                 username='Riry Nomenjanahary'
            
            />
            
        </div>
        
    </nav>
  )
}
