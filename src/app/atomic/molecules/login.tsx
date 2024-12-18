import { redirect } from "next/navigation"


export default function Login() {
    return (
        <a className="log button-style" href="/api/auth/login">Login</a>
    )
}