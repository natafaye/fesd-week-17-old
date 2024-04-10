import { useEffect, useState } from "react"

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function LoginPage() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(URL)
            const arrayOfData = await response.json()
            setUserList(arrayOfData)
        }
        fetchUsers()
    }, [])

    return (
        <div>
            <h3>Login</h3>
            <p>(This is very fake)</p>
            <form>
                <select>
                    { userList.map(user => (
                        <option key={user.id}>{user.name}</option>
                    ))}
                </select>
                <button>Login</button>
            </form>
        </div>
    )
}