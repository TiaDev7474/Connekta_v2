
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { WrapperField } from '@/Element/Form/WrapperField';
import { InputField } from '@/Element/Form/InputField';
import { MdEmail, MdLock } from 'react-icons/md';
import './styles/LoginForm.scss'
import { Button } from '@/Element/Button';
import { useRegister } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';



interface IFormData {
    email:string,
    password:string,
}

export const RegisterForm = () => {
     const { mutate:registerUser, isError, error } = useRegister();
     const navigate = useNavigate();
  const formik = useFormik({
       initialValues:{
           email:'',
           password:'',
       },
       validationSchema: Yup.object({
            email:Yup.string().email('Please a valid email address to log in'),
            password:Yup.string().required('Password is required to log in')
       }),
       onSubmit: async(values:IFormData) => {
             registerUser(values, {
                 onSuccess:(response) => {
                      if(response.status === 201){
                         //todo: implement otp flow
                           navigate("/confirmation")
                      }
                 }
             })
       }
  })
  return (
     <React.Fragment>
          {
               isError && (
                     <span>{error.message}</span>
               )
          }
          <form className='form' onSubmit={formik.handleSubmit}>
               <WrapperField name="email" formik={formik} >
                    <InputField  
                         type='email' 
                         placeholder='Enter your email address'
                         name='email'
                         formik={formik}
                         Icon={<MdEmail/>}
                    />
               </WrapperField>
               <WrapperField name="password" formik={formik} >
                    <InputField  
                         type='password' 
                         placeholder='Enter your password '
                         name='password'
                         formik={formik}
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
