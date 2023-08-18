
import { Layout } from '../components/Layout'
import { MdPattern } from 'react-icons/md'
import { ForgotPasswordForm } from '../components/ForgotPasswordForm'


export const ForgotPassword = () => {
  return (
     <Layout
          title='Forgot password?'
          description="No worries, we'll send you reset instructions"
          icon={<MdPattern/>}
          
     >
         <ForgotPasswordForm />
        
     </Layout>
  )
}
