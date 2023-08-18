import React, { createContext, useCallback, useState } from "react";

type themeType = "light" | "dark";

export type ThemeContextType = {
     currentTheme:themeType ;
     toggleTheme: () => void
}

type ThemeProviderProps = {
    children: React.ReactNode
}
    

export const themeContext = createContext<ThemeContextType>({} as ThemeContextType);


export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentTheme , setTheme] = useState<themeType>("dark");
    const toggleTheme = useCallback(() => {
            if(currentTheme === 'light'){
                setTheme("dark")
            }else{
                setTheme("light")
            }
    },[currentTheme])
    return (
       <themeContext.Provider value={{currentTheme , toggleTheme}}>
            {children}
       </themeContext.Provider>
)}
