import {Navigate, Outlet} from 'react-router';

const PublicRouter = () => {
    localStorage.getItem('auth');
    const auth = localStorage.getItem('auth');
    return auth ? <Navigate to='/'/> : <Outlet/>; 
}
 export default  PublicRouter