import { useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const request = (url,method = 'GEt',body = '') => {

    }

    return {loading,request,error}
}