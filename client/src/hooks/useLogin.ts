import { LoginCredentials, loginFn } from "@/features/auth/api/api.auth"
import { LoginResponse } from "@/features/auth/types/apiResponse"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "react-query"


export const useLogin = () => {
     const queryClient = useQueryClient()
     return  useMutation<LoginResponse, AxiosError, LoginCredentials>({ 
        mutationFn:(values: LoginCredentials) => {
            return  loginFn(values)
        },
        onSuccess:(response) => {
              queryClient.invalidateQueries({ queryKey:['user', response.data.data?._id] })
        },
        useErrorBoundary: (error) =>  error.response?.status?  error.response?.status >= 500 : false
    })
}

