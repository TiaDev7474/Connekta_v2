import { MainLayout } from "@/components/Layout"
// import { useUser } from "@/features/auth/hooks/useUser"
// import { useUserContext } from "@/hooks/useUserContext"
import { Suspense} from "react"
// import  { Navigate } from "react-router-dom"
import { Outlet} from "react-router-dom"

const Homepage  = () => {
    // const { isAuthentified } = useUserContext();

    // const {isError,  error } = useUser();
   
    return (
        <MainLayout>
            {/* {
                !isAuthentified  && (
                  <Navigate to="/auth/login" replace={true} />
            )
            } */}
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