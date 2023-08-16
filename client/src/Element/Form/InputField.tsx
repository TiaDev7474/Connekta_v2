import { FormikProps} from 'formik'
import React from 'react'
import './styles/InputField.scss'
import {  MdVisibility } from 'react-icons/md'
type InputFieldProps = {
    type: 'text' |'password' |'email'|'checkbox',
    name:string,
    placeholder?:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formik:FormikProps<any>
    Icon?:React.ReactNode
    label?:string
   
}
export const InputField = (props: InputFieldProps) => {
    const { type ,name, placeholder , formik, Icon, label} = props;

  return (
        <div className={type === 'checkbox'? '': 'input-wrapper'}>
            {Icon}
            
            <input 
                className='input'
                type={type}
                placeholder={placeholder}
                {...formik.getFieldProps(name)}

            /> 
            {label}
            { type === 'password' && <MdVisibility/>} 
        </div>
      
  )
}
