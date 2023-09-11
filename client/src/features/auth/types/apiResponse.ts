
export interface ApiResponse<T> {
    data:{
        status: "Success" | "failed",
        message?: string,
        data?: T,
        token?: string,
        refreshToken?: string
    }
   
}

export interface IUser {
    _id: string,
    username:string,
    email:string,
    avatar:[string | null],
    bio:string,
    isVerified: boolean,
    lastActivity: Date,
}

export interface LoginResponse extends ApiResponse<IUser>{
    token: string,
    refreshToken: string
}
export interface RegisterResponse extends ApiResponse<null>{
    userEmail: string
}