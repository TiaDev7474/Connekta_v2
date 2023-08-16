import { Button } from '@/Element/Button'

import { MdFacebook } from 'react-icons/md'
import './socialMediaLogin.scss'
export const SocialMediaLogin = () => {
  return (
    <div className='socials-wrapper'>
        <Button Icon={<MdFacebook size={'2rem'}/>} />
        <Button Icon={<MdFacebook size={'2rem'}/>} />
        <Button Icon={<MdFacebook size={'2rem'}/>} />
    </div>
  )
}
