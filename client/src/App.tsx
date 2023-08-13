import { AppProvider } from "@/provider/app";
import { AppRoutes } from "./routes"


function AppRouter() {
 
  
  return (
      <AppProvider>
           <AppRoutes />
      </AppProvider>
  )
}

export default AppRouter
