import { RegisterCredentials, registerFn } from "@/features/auth/api/api.auth"
import { useMutation } from "react-query"


export const useLogin = () => {
     return  useMutation({ 
        mutationFn:(values: RegisterCredentials) => {
            return  registerFn(values)
        },
     })
}