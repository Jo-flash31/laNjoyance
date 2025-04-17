import {Navigate, Outlet} from 'react-router';

const PrivateRouter = () => {
    localStorage.getItem('auth');
    const auth = localStorage.getItem('auth');
    return auth ? <Outlet/> : <Navigate to='/login'/>;
}
export default PrivateRouter;