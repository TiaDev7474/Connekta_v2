import { Button } from '@/Element/Button'
import { InputField } from '@/Element/Form/InputField'
import { WrapperField } from '@/Element/Form/WrapperField'
import {  useFormik } from 'formik'
import { number } from 'yup'

const ConfirmationForm = () => {
    const formik = useFormik({
         initialValues:{
              digits:number
         },
         onSubmit:(values) => {
              console.log(values)
         }
    })
  return (
    
          <form className='form' >
              <WrapperField name='digits' formik={formik}>
                 <InputField 
                       type='numeric'
                       name='digits'
                       formik={formik}
                       placeholder='000000'
                 />
              </WrapperField>
               <span className='layout-link'>
                      Didn't get the code?
                     <strong className='link-back'>Resend it</strong>
               </span>
               <div className='separator'></div>
               <div className='layout-action'>
                    <Button type='secondary' label='Cancel' />
                    <Button type='primary' label='Verify' />
               </div>  
          </form>
      
  )
}

export default ConfirmationForm