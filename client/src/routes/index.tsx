import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
     const auth = {
         user: true
     };

     const commonRoutes = [{ path:'/', element:<div>Landing page goes here</div>}];
     const routes = auth.user ? protectedRoutes : publicRoutes;
     const element  = useRoutes([ ...commonRoutes , ...routes]);
     return <> { element } </>

}