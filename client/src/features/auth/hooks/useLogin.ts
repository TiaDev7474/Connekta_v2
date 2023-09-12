import { LoginCredentials, loginFn } from "@/features/auth/api/api.auth"
import { LoginResponse } from "@/features/auth/types/apiResponse"
import { AxiosError } from "axios"
import { useMutation } from "react-query"


export const useLogin = () => {
     return  useMutation<LoginResponse, AxiosError, LoginCredentials>({ 
        mutationFn:(values: LoginCredentials) => {
            return  loginFn(values)
        },
        useErrorBoundary: (error) =>  error.response?.status ?  error.response?.status >= 500 : false
    })
}

