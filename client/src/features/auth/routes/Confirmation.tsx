
import { Layout } from '../components/Layout'
import { MdConfirmationNumber } from 'react-icons/md'
import ConfirmationForm from '../components/ConfirmationForm'
import '../components/styles/confirmation.scss'

export const Confirmation = () => {
   
  return (
     <Layout
          title='Confirmation code'
          description="We've sent  a  code to rirynomenjanahary"
          icon={<MdConfirmationNumber/>}
     >
          <ConfirmationForm />
     </Layout>
  )
}
