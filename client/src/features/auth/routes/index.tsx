
import { Route, Routes } from 'react-router-dom'
import { Register } from './Register'
import { Login } from './Login'
import { Confirmation } from './Confirmation'
import { ForgotPassword } from './ForgotPassword'
import { SetNewPassword } from './SetNewPassword'
export const AuthRoutes = () => {
  return (
     <Routes>
         <Route path='register' element={<Register />} />
         <Route path='login' element={<Login />} />
         <Route path='confirm' element={<Confirmation/>}/>
         <Route path='resetpassword' element={<ForgotPassword/>}/>
         <Route path='newpassword' element={<SetNewPassword/>}/>
     </Routes>
  )
}
