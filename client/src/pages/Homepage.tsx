import { MainLayout } from "@/components/Layout"
// import { useUser } from "@/features/auth/hooks/useUser"
import { Suspense} from "react"
import { Outlet} from "react-router-dom"

const Homepage  = () => {
  

    // const {isError,  error } = useUser();
   
    return (
        <MainLayout>
          
            <Suspense 
                fallback={
                    <div>
                         skeleton ui goes here
                    </div>
                }
            >
                
                <Outlet/>
            </Suspense>  
        </MainLayout>
    )
}

export default Homepage