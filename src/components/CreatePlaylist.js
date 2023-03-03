import './CreatePlaylist.css';
import useKeypress from '../hooks/useKeypress';

function CreatePlaylist() {

    function onClick(e) {
        alert("Create Playlist");
    }

    useKeypress((key) => {
        if (key === "Enter")
            onClick();
    });

    return (
        <div className="create-playlist">
            <h1>Create a Playlist</h1>
            <h2>Put the name</h2>
            <div class="create-playlist-input">
                <input type="text" />
                <i class="icon-plus" onClick={onClick}></i>
            </div>
        </div >
    );
}

export default CreatePlaylist;