import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

const PrivateRoute = () => {
    const { loggedIn, loading } = useAuthStatus()

    if(loading) {
        return <div>Loading...</div>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute