"use client"
import { useFormState } from "react-dom"
import { submitLoginForm } from "../action"
import { SubmitLoginButton } from "./submit-login"

const Login = async () => {
    const [state , formAction] = useFormState(submitLoginForm ,{message : "" , data :{}} )
    return (
        <>
            <main className="framer">
                <h1>Login to Small Blogger</h1>
                <p>Create contents for your audience</p>
                <form action={formAction}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="emai"
                        id="email"
                        className="input input-border-faint"
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        className="input input-border-faint"
                    />
                   <SubmitLoginButton/>
                    <p> {state.message}</p>
                </form>
            </main>
        </>
    )
}

export default Login