import { useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const request = () => {

    }

    return {loading,require}
}