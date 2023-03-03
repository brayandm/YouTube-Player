import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div className="layout">
            <div className="layout-header">
                <a className="layout-header-link" href="/">
                    <img className="layout-header-logo" src="/youtube-logo.png" alt="youtube logo" />
                </a>
                <i class="icon-reorder youtube-options"></i>
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;
