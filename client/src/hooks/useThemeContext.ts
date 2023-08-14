import { themeContext } from "@/context/context.theme";
import { useContext } from "react";


export const useThemeContext = () =>  useContext(themeContext);