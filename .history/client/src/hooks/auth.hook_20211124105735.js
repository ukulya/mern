import { useCallback, useState } from "react"

export const useAuth = () =>{
    const [token,setToken] = useState(null)
    const [userId,setUserId] = useState(null)

    const login = useCallback((jwtToken,id) => {
        setToken(jwtToken)
        setuserId(id)

        localStorage.setItem(storageName,JSON.stringify({
            userId,token
        }))
    },[])
    const logout = useCallback(() => {
        setToken(null)
        setuserId(null)
        localStorage.removeItem(storageName)
    },[])


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token,data.userId)
        }
    },[login])
    return {login,logout,token}
}