import './WatchPlaylist.css';
import { useParams } from 'react-router-dom';

function WatchPlaylist() {

    const { playlistId } = useParams();

    return (
        <div className="watch-playlist">
            <h1>Playlist: {playlistId}</h1>
        </div >
    );
}

export default WatchPlaylist;