import { RegisterCredentials, registerFn } from "@/features/auth/api/api.auth"
import { useMutation } from "react-query"
import { RegisterResponse } from "../types/apiResponse"
import { AxiosError } from "axios"


export const useRegister = () => {
     return  useMutation<RegisterResponse, AxiosError , RegisterCredentials>({ 
        mutationFn:(values: RegisterCredentials) => {
            return  registerFn(values)
        },
     })
}