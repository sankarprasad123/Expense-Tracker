import React from 'react'
import { useState,useContext } from 'react'
import { GlobalState } from '../Context/Context'

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const { dispatchUser } = useContext(GlobalState)

    const handleSubmit = () => {
        if (user.username === "" && user.password === "") return
        localStorage.setItem("user", JSON.stringify(user.username))
        dispatchUser(user.username)
    }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-xl font-bold'>Login</h1>
        <div className='py-3 flex flex-col gap-3'>
            <label htmlFor="username">Username:</label>
            <input className='border py-2 px-3 rounded w-96' type='text' name='username'
            value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
        </div>
        <div className='py-3 flex flex-col gap-3'>
            <label htmlFor="password">Password:</label>
            <input className='border py-2 px-3 rounded w-96' type='password' name='password'
            value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
        </div>
        <div>
            <button onClick={handleSubmit} className='bg-blue-500 px-6 py-3 w-96 rounded text-white'>Submit</button>
        </div>
    </div>
  )
}

export default Login