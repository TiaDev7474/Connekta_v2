
import { Layout } from '../components/Layout'
import { SetNewPasswordForm } from '../components/SetNewPasswordForm'
import { MdPassword } from 'react-icons/md'

export const SetNewPassword = () => {
  return (
      <Layout
          title='Set new password'
          description='Password must be at least 8 characters to be strong '
          icon={<MdPassword/>}
      
      >
          <SetNewPasswordForm/>
      </Layout>
  )
}
