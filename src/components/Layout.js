import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div className="layout">
            <div className="layout-header">
                <img className="layout-header-logo" src="/youtube-logo.png" alt="youtube logo" />
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;
