import React, { createContext, useCallback, useState } from "react";

type themeType = "light" | "dark";

export type ThemeContextType = {
     currentTheme:themeType ;
     toggleTheme: () => void
}

export type ProviderProps = {
    children: React.ReactNode;
}
    

export const themeContext = createContext<ThemeContextType>({} as ThemeContextType);


export const ThemeProvider:React.FC<ProviderProps> = ({ children }) => {
    const [currentTheme , setTheme] = useState<themeType>("light");
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
