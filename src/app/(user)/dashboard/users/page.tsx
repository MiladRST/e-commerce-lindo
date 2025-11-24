"use client"
import { useEffect, useState } from "react"
export default function UsersPage() {

    const [users, setUsers] = useState([])

    useEffect(()=>{

        const getUsers = async() => {
            try{
                const response = await fetch('/api/users')
                const data = await response.json()
                console.log(data)
                setUsers(data.users)
            }catch(error){
                console.log('something went wrong')
            }
        }

        getUsers();
    }, [])


    return <div>
        <h1>Users Page</h1>
        <ul>
            {users.map((user: any) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
}