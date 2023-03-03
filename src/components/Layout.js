import './Layout.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import OptionsMenu from './OptionsMenu';
import useKeypress from '../hooks/useKeypress';

function Layout() {

    const [hidden, setHidden] = useState(true);

    useKeypress((key) => {
        if (key === "Escape")
            setHidden(true);
    });

    return (
        <div className="layout">
            <div className="layout-header">
                <a className="layout-header-link" href="/">
                    <img className="layout-header-logo" src="/youtube-logo.png" alt="youtube logo" />
                </a>
                <i class="icon-reorder youtube-options" onClick={(e) => { setHidden(!hidden) }}></i>
                <OptionsMenu hidden={hidden} />
            </div>
            <Outlet />
        </div>
    );
}

export default Layout;
