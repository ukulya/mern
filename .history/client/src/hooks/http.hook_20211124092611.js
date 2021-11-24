import { useCallback, useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const request = useCallback(async(url,method = 'GEt',body = null,headers = {}) => {
    setLoading(true)

        try{
            if(body){
                body - JSON.stringify(body)
            }
            constawait fetch(url,{method,body,headers })
        }catch(e){
            setLoading(false)
            setError(e.message)
            throw e
        }
    },[])

    const clearError = () => setError(null)

    return {loading,request,error,clearError}
}