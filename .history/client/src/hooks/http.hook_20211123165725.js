import { useState } from "react"

export const useHttp = () => {

    const [loading,setLoading] = useState(false)
    const [error,setLoading] = useState(false)

    const request = () => {

    }

    return {loading,require}
}