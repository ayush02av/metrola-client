import { useEffect, useContext } from "react"
import AppContext from "@/AppContext"
import { useRouter } from "next/router"

export default function AuthMiddleware() {
    const context = useContext(AppContext)
    const router = useRouter()

    useEffect(() => {
        if (!context.state.token) {
            const token = context.getCookie('token')
            context.setToken(token)
            if (!token && !router.pathname.startsWith('/auth') && router.pathname != '/') {
                router.push('/auth/login/')
            }
        }
    }, [context.state.token])

    return null
}
