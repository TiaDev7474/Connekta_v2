

export type IRoutes = {
      path?:string,
      element:React.FC | React.ReactNode
      index?: boolean
      children?:IRoutes | IRoutes[]
}

