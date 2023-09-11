import { Button } from '@/Element/Button'
import { InputField } from '@/Element/Form/InputField'
import { WrapperField } from '@/Element/Form/WrapperField'
import { useFormik } from 'formik'
import { MdLock, MdPassword } from 'react-icons/md'


export const SetNewPasswordForm = () => {
    const formik = useFormik({
        initialValues:{
             password: '',
             confirmPassword:''
        },
        onSubmit:(values) => {
             console.log(values)
        }
   })
    return (
   
         <form className='form' >
              <WrapperField name="password" formik={formik} >
                    <InputField  
                         type='password' 
                         placeholder='Enter your password '
                         name='password'
                         formik={formik}
                         Icon={<MdLock />}
                    />

               </WrapperField>
               <WrapperField name="confirmPassword" formik={formik} >
                    <InputField  
                         type='password' 
                         placeholder='Enter your password '
                         name='confirmPassword'
                         formik={formik}
                         Icon={<MdPassword />}
                    />
               </WrapperField>
             <Button type='primary' label='Reset password' />
         </form>
     
 )
}