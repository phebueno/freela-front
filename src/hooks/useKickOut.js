import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export default function useKickOut() {
    const { username, token, idAccount } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token || !username || !idAccount) navigate("/signin")
    })
}