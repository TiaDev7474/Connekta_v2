import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { Landingpage } from "@/pages/Landingpage";
import { useThemeContext } from "@/hooks/useThemeContext";


export const AppRoutes = () => {
     
     const { currentTheme } = useThemeContext();
     
     const className = currentTheme ==="dark" ? 'dark app': 'light app'
     const commonRoutes = [{ path:'/', element:<Landingpage/>}];
     const routes =  [...publicRoutes,...protectedRoutes];
     const element  = useRoutes([ ...commonRoutes , ...routes]);

     return (
            <div className={className}> 
               { element } 
            </div>
     )
}