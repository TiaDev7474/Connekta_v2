import { AppProvider } from "@/provider/app";
import { AppRoutes } from "./routes"



function AppRouter() {
   
  return (
      <div>
          <AppProvider>
              <AppRoutes />
          </AppProvider>
      </div>
      
  )
}

export default AppRouter
