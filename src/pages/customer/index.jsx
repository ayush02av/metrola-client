import axios from "axios"
import { useEffect, useContext } from "react"
import AppContext from "@/AppContext"

export default function Customer() {
    const context = useContext(AppContext)

    useEffect(function () {
        if (context.state.token)
            axios({
                method: "get",
                url: "http://localhost:8000/customer",
                headers: {
                    Authorization: `Bearer ${context.state.token}`
                }
            })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error.response)
                })
    }, [context.state.token])

    return (
        <div>
            Customer
        </div>
    )
}