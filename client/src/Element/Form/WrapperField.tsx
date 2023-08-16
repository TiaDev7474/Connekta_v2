import { FormikProps} from "formik"
import React from "react"
import './styles/WrapperField.scss'
type WrapperFieldProps = {
    children: React.ReactNode,
    name:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formik:FormikProps<any>
}

export const WrapperField = ({children,name,formik}: WrapperFieldProps) => {
    const { errors , touched} = formik
  return (
    <div className="wrapper-field">
         {children}
         {touched[name] && errors[name] && (
                 <div className='error-message'>{String(errors[name])}</div>
          )}
    </div>
  )
}
