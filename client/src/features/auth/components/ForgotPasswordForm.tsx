import { Button } from '@/Element/Button'
import { InputField } from '@/Element/Form/InputField'
import { WrapperField } from '@/Element/Form/WrapperField'
import { useFormik } from 'formik'


export const ForgotPasswordForm = () => {
    const formik = useFormik({
        initialValues:{
             email: ''
        },
        onSubmit:(values) => {
             console.log(values)
        }
   })
    return (
         <form className='form' >
             <WrapperField name='email' formik={formik}>
                <InputField 
                      type='email'
                      name='email'
                      formik={formik}
                      placeholder='Enter your email address'
                />
             </WrapperField>
             <Button type='primary' label='Reset password' />
         </form>  
 )
}

