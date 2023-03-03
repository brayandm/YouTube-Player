import './Playlists.css';
import Search from './Search';

function Playlists() {

    return (
        <div className="playlists">
            <h1>Find the Playlist by the link</h1>
            <Search isIndex={true} />
        </div >
    );
}

export default Playlists;