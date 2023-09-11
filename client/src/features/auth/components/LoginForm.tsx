import React from 'react';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { WrapperField } from '@/Element/Form/WrapperField';
import { InputField } from '@/Element/Form/InputField';
import { MdEmail, MdLock } from 'react-icons/md';
import './styles/LoginForm.scss'
import { ActionButton } from '@/Element/Button/ActionButton';
import { useLogin } from '@/hooks/useLogin';
import { LoginResponse } from "@/features/auth/types/apiResponse"

import { useNavigate } from 'react-router-dom';



interface IFormData {
    email:string,
    password:string,
    rememberMe:boolean
}

export const LoginForm = () => {
     const { mutate:loginUser, isLoading, isError , error} = useLogin();
     const navigate = useNavigate()
     const formik = useFormik({
          initialValues:{
               email:'',
               password:'',
               rememberMe: false
          },
          validationSchema: Yup.object({
               email:Yup.string().email('Please enter valid email address to log in'),
               password:Yup.string().required('Password is required to log in')
          }),
          onSubmit: async(values:IFormData) => {
               console.log(values);
               loginUser(values,{
                    onSuccess:(response) =>{
                         console.log(response)
                    
                         // if(response.token){
                         //      navigate("/user")
                         // }
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
               <InputField
                    type='checkbox' 
                    name='rememberMe'
                    label='Remember me'
                    formik={formik}
               />
               <div className='form-action'>
                     <ActionButton label='Login' type='primary' state={isLoading}/>
               </div>  
          </form>
      </React.Fragment>
      
  
  )
}
