import { useCallback, useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const request = useCallback(asy) => {

    }

    return {loading,request,error}
}