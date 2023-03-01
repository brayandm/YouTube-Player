import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div className="layput">
            <h1>YouTube Clone</h1>
            <Outlet />
        </div>
    );
}

export default Layout;
