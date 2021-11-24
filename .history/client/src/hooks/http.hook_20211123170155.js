import { useCallback, useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const request = useCallback(async(url,method = 'GEt',body = null,headers = {}) => {
        try{
            await fetch()
        }catch(e){

        }
    })

    return {loading,request,error}
}