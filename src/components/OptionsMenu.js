import './OptionsMenu.css';

function OptionsMenu({ hidden }) {

    return (
        <div className={"options-menu " + (hidden ? "hidden" : "")}>
            <ul className="options-menu-list">
                <li className="options-menu-item">
                    Option 1
                </li>
            </ul>
        </div >
    );
}

export default OptionsMenu;