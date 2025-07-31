import { redirectDocument } from "react-router"
import { getSession } from "../hooks/useAuth"
import { request } from "./request"
import { AxiosError } from "axios"
import Cookies from "js-cookie"

export const initialDataLoader = async (endpoint, config = {}) => {
    const token = getSession()

    if (!token?.ACCESS_TOKEN) return redirectDocument("/auth/login")

    try {
        const data = await request.get(endpoint, {
            headers: {
                ...(config.headers || {})
            },
            ...config
        })

        return { data }
    } catch (error) {
        console.error("failed: ", error)

        if (error instanceof AxiosError) {
            if (error.response?.status === 401) {
                Cookies.remove("auth")
                return redirectDocument("/auth/login")
            }
        }

        return { data: null }
    }

} 