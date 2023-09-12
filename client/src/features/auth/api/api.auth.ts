import { apiClient } from "@/lib/axios"
import { LoginResponse, RegisterResponse, UserInfoResponse } from "@/features/auth/types/apiResponse"

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

export const registerFn = async (values: RegisterCredentials):Promise<RegisterResponse> => {
   return await apiClient.post('/auth/register', values);
}

export const getUserFn = async ():Promise<UserInfoResponse> => {
   return await  apiClient.get('/user');
}