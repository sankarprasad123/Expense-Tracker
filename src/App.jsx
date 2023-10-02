import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalState } from './Context/Context'

const Login = lazy(() => import('./Pages/Login'))
const Dashboard = lazy(() => import('./Pages/Dashboard'))


const App = () => {

    const { state } = useContext(GlobalState)

  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={state.user ? <Dashboard />: <Login />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App