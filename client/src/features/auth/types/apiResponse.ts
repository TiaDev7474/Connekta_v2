
export interface ApiResponse<T> {
    status:number,
    statusText: string
    data:{
        status: "Success" | "failed",
        message?: string,
        data?: T,
       
    }
   
}
// export interface  iServerResponse{

// }

export  interface IUser {
    _id: string,
    username:string,
    email:string,
    avatar:[string | null],
    bio:string,
    isVerified: boolean,
    lastActivity: Date,
}
export interface IUserToken{
     token?: string,
     refreshToken?: string
}
export  interface IUserEmail{
    userEmail: string
}

export interface LoginResponse extends ApiResponse<IUserToken>{
   
}
export interface UserInfoResponse extends ApiResponse<IUser>{

}
export interface RegisterResponse extends ApiResponse<IUserEmail>{
   
}