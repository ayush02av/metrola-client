import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react'
import AppContext from '@/AppContext'

export default function Handler() {
    const context = useContext(AppContext)

    const router = useRouter()

    useEffect(function () {
        if (router.query.token) {
            context.setCookie('token', router.query.token, 30)
            window.location.href = '/customer'
        } else if (router.query.logout) {
            context.deleteCookie('token')
            window.location.href = '/'
        }
    })

    return null
}