
import { FcGoogle } from 'react-icons/fc'
import { LuFacebook, LuGithub} from 'react-icons/lu'
import './socialMediaLogin.scss'

const socialsBrand = [
    {
        brandType:'facebook',   
        to:'https://facebook.com',
        icon:<LuFacebook size={'2rem'}/>
    },
    {
        brandType:'google',  
        to:'https://google.com',
        icon:<FcGoogle size={'2rem'}/>
    }, 
    {
      brandType:'github',
      to:'https://github.com',
      icon:<LuGithub size={'2rem'}/>
  }
]
    


export const SocialMediaLogin = () => {
  return (
    <div className='socials-wrapper'>
          {socialsBrand.map(brand => {
              return(
                  <button className={`btn btn-social ${brand.brandType}`}>
                      {brand.icon}
                  </button> 
              )
          })}
    </div>
  )
}
