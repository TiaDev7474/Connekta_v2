
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { WrapperField } from '@/Element/Form/WrapperField';
import { InputField } from '@/Element/Form/InputField';
import { MdEmail, MdLock } from 'react-icons/md';
import './styles/LoginForm.scss'
import { Button } from '@/Element/Button';


interface IFormData {
    email:string,
    password:string,
}

export const RegisterForm = () => {
  const forrmik = useFormik({
       initialValues:{
           email:'',
           password:'',
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
     <React.Fragment>
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
               <div className='form-action'>
                     <Button label='Sign Up' type='primary'/>
               </div>  
          </form>
         
      </React.Fragment>
      
  
  )
}
