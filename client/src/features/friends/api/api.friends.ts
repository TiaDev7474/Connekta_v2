import { apiClient } from "@/lib/axios"

//todo: type returned value of the fn
export const getFriendsFn = async () => {
    return  await apiClient.get('/user/friends')
}
export const getFriendsSuggestionFn = async () => {
    return await apiClient.get('/user/friend-suggestion')
}
export const getFriendRequestFn = async () => {
    return await apiClient.get('/user/request')
}

