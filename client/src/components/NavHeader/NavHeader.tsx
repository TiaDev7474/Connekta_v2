
import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.jpg';
import { Notification } from '@/Element/Notification/Notification';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { useUserContext } from '@/hooks/useUserContext';

export const NavHeader = () => {
  const { currentUser } = useUserContext();
  const userAvatar = currentUser?.avatar?.length as number < 0 ?  avatar : currentUser?.avatar[0];
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
                 avatar={userAvatar as string} 
                 username={currentUser?.username}
            
            />
            
        </div>
        
    </nav>
  )
}
