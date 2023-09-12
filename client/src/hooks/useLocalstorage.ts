

export const useLocalstorage = () => {
    const setItemToStorage = (key: string, value: string) =>{
         localStorage.setItem(key , value)
    }

    const getItemFromStorage = (key: string) => {
         return localStorage.getItem(key);
    }
    const removeItemFromStorage = (key: string) => {
         return localStorage.removeItem(key);
    }
    return {
       setItemToStorage,
       getItemFromStorage,
       removeItemFromStorage
    }
}