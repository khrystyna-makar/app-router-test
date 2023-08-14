import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Outlet />
        </div>
    );
}

export default Layout;
