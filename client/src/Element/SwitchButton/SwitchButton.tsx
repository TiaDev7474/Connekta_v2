
import { MdBedtime , MdLightMode } from 'react-icons/md'
import './SwitchButton.scss'
import { useThemeContext } from '@/hooks/useThemeContext'
export const SwitchButton = () => {
   const { currentTheme , toggleTheme} = useThemeContext();
  
  return (
    <div 
       onClick={toggleTheme}
       className='switch-btn'
    >
        {
            currentTheme ==="light" ? 
             <MdBedtime  /> : <MdLightMode/>
        }
        
    </div>
  )
}
