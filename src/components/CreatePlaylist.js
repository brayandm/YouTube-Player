import './CreatePlaylist.css';
import useKeypress from '../hooks/useKeypress';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePlaylist() {

    const navigate = useNavigate();

    function onClick(e) {

        const playlistId = uuidv4();

        axios.post('https://youtube.thorsteinsson.is/api/playlists', {
            name: playlistId,
        }).then((response) => {
            navigate(`/playlists/${response.data.id}`);
        }).catch((error) => {
            console.log(error);
        });
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