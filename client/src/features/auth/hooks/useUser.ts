import { useQuery } from "react-query"
import { getUserFn } from "../api/api.auth"
import { IUser, UserInfoResponse } from "../types/apiResponse"
import { AxiosError } from "axios"
import { useUserContext } from "@/hooks/useUserContext"


export const useUser = () => {
      const { updateUser } = useUserContext()
      return useQuery<UserInfoResponse, AxiosError>({
           queryKey: ['user'],
           queryFn: getUserFn,
           
            onSuccess: (response) => {
                  if(response.status === 200){
                         updateUser(response.data.data as IUser)
                  }
            }
           
      })
}