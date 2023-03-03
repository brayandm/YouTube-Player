import './OptionsMenu.css';

function OptionsMenu({ hidden }) {

    return (
        <div className={"options-menu " + (hidden ? "hidden" : "")}>
            <div className="options-menu-list">
                <div className="options-menu-section">
                </div>

                <div className="options-menu-item">
                    <i class="icon-music"></i>
                    <span className="options-menu-text">Go to Playlists</span>
                    <i className="icon-chevron-right"></i>
                </div>

                <div className="options-menu-item">
                    <i class="icon-plus"></i>
                    <span className="options-menu-text">Create a Playlist</span>
                    <i className="icon-chevron-right"></i>
                </div>
            </div>
        </div >
    );
}

export default OptionsMenu;