import { IUser } from "@/features/auth/types/apiResponse";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { ProviderProps } from "./context.theme";


export interface UserContextType {
      isAuthentified: boolean
      currentUser : IUser | null ,
      updateUser: (currentUser: IUser) => void,
      loginFn: () => void ,
      logoutFn: () => void,
}

export const UserContext  = createContext<UserContextType>({} as UserContextType);


export  const UserContextProvider:React.FC<ProviderProps> = ({ children }) => {
     const [currentUser, setCurrentUser] = useState<IUser | null >({ }  as IUser | null)
     const [ isAuthentified, setIsAuthentified] = useState<boolean>(false);

     useEffect(() => {
         (
            async  function isUserAuthentified(){
               setIsAuthentified(await localStorage.getItem('token') != null);
           }
         )() 
     },[])
     const loginFn = useCallback(() => {
            setIsAuthentified(true)
     },[])
     const updateUser = useCallback( ( currentUser: IUser ) => {
           setCurrentUser(currentUser);
     },[])
     const logoutFn = useCallback(() => {
           setCurrentUser(null)
     },[])
     return (

         <UserContext.Provider value={{ currentUser, loginFn, logoutFn, isAuthentified, updateUser}}>
                 { children }
         </UserContext.Provider>
     )
}