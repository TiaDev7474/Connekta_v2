
import { RouteObject } from 'react-router-dom'
import Homepage from '@/pages/Homepage'



export const protectedRoutes : RouteObject[]  = [
    {
        path:'/user/*',
        element: <Homepage/>,
        children:[
            { index:true , element:<div>Dashboard pages</div> },
            { path:'message', element: <div>MessagePages</div>},
            { path:'friends', element:<div>Friend pages</div> },
            { path:'video-call', element: <div>Video Calls</div>},
            { path:'profile', element:<div>Profile pages</div> },
            { path:'settings', element:<div>Settings pages</div> }
        ]
        
  }
]