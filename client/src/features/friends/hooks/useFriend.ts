import { useQuery } from "react-query"


export const useUserFriend = () => {
     return useQuery({
           queryKey:['friends'],
          
     })
}