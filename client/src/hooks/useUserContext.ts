import { UserContext } from "@/context/context.user";
import { useContext } from "react";


export const useUserContext = () => useContext(UserContext);