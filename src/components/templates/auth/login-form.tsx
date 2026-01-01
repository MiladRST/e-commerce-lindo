"use client"
import { useState } from 'react'


export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleLoginForm = async(e:React.FormEvent) => {
        e.preventDefault()
        console.log('login form submission')

        setIsPending(true)
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            
            console.log('response => ', response)
            const data = await response.json()
            console.log('response data', data)
        } catch(error) {
            console.log(error)
        } finally {
            setIsPending(false)
        }
        
    }

    return (
        <form onSubmit={handleLoginForm}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
            
        </form>
    )
}