
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { WrapperField } from '@/Element/Form/WrapperField';
import { InputField } from '@/Element/Form/InputField';
import { MdEmail, MdLock } from 'react-icons/md';
import './styles/LoginForm.scss'
import { Button } from '@/Element/Button';
import { SocialMediaLogin } from './SocialMediaLogin/SocialMediaLogin';
interface IFormData {
    email:string,
    password:string
}

export const LoginForm = () => {
  const forrmik = useFormik({
       initialValues:{
           email:'',
           password:'',
           rememberMe: false
       },
       validationSchema: Yup.object({
            email:Yup.string().email('Please a valid email address to log in'),
            password:Yup.string().required('Password is required to log in')
       }),
       onSubmit: async(values:IFormData) => {
             console.log(values)
       }
  })
  return (
    
       <form className='form'>
           <WrapperField name="email" formik={forrmik} >
                <InputField  
                     type='email' 
                     placeholder='Enter your email address'
                     name='email'
                     formik={forrmik}
                     Icon={<MdEmail/>}
                />
           </WrapperField>
           <WrapperField name="password" formik={forrmik} >
                <InputField  
                     type='password' 
                     placeholder='Enter your password '
                     name='password'
                     formik={forrmik}
                     Icon={<MdLock />}
                />

           </WrapperField>
           <InputField
                 type='checkbox' 
                 name='rememberMe'
                 label='Remember me'
                 formik={forrmik}
           
           />
           <Button label='Login' type='primary'/>
           <div className='separator'>
               <div className='separator-line'></div>
               <div>Or</div>
               <div className='separator-line'></div>  
           </div>
           <div>
               <SocialMediaLogin />
           </div>
           
      </form>
  
  )
}
