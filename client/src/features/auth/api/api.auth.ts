import { apiClient } from "@/lib/axios"
import { LoginResponse } from "@/features/auth/types/apiResponse"

export type  LoginCredentials = {
     email: string,
     password: string,
     rememberMe:boolean 
}
export type RegisterCredentials = {
     email: string,
     password: string
}
export const loginFn = async (values: LoginCredentials ):Promise<LoginResponse> => {
     return await apiClient.post('/auth/login',values);
}

export const registerFn = async (values: RegisterCredentials):Promise<LoginResponse> => {
   return await apiClient.post('/auth/register', values)
}