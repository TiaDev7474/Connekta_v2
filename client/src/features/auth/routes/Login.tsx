
import { MdLogin } from "react-icons/md"
import { Layout } from "../components/Layout"
import { LoginForm } from "../components/LoginForm"
import { Footer } from "../components/Footer/Footer"

const loginInfo = {
   title:'Welcome back',
   description:'Enter your details to Login'
}
export const Login = () => {
  return (
       <Layout 
            title={loginInfo.title} 
            description={loginInfo.description} 
            icon={<MdLogin/>}>
           <LoginForm />
           <div className='separator'>
               <div className='separator-line'></div>
               <div>Or</div>
               <div className='separator-line line-right'></div>  
            </div>
           <div>
               <Footer  isLogin={true}/>
           </div>
       </Layout>
    
  )
}
