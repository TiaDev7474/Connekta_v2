import { MdCreate } from "react-icons/md"
import { Layout } from "../components/Layout"
import { RegisterForm } from "../components/RegisterForm"
import { Footer } from "../components/Footer/Footer"

const registerInfo = {
  title:'Sign up to Connekta',
  description:'Enter your details to create an account'
}

export const Register = () => {
  return (
    <Layout 
         title={registerInfo.title}
         description={registerInfo.description}
         icon={<MdCreate/>}

    >
        <RegisterForm />
        <div className='separator'>
            <div className='separator-line'></div>
            <div>Or</div>
            <div className='separator-line line-right'></div>  
        </div>
        <div>
             <Footer  isLogin={false}/>
        </div>
    </Layout>
 
)
}
