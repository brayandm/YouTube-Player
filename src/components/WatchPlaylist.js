import './WatchPlaylist.css';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import PlaylistVideoPanel from './PlaylistVideoPanel';

const fetcher = (url) => fetch(url).then((res) => res.json());

function WatchPlaylist() {

    const { playlistId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
        fetcher
    );

    return (
        <div className="watch-playlist">
            <h1>Playlist: {playlistId}</h1>
            {error && <div></div>}
            {isLoading && <div></div>}
            {data && <PlaylistVideoPanel videos={data.videos} />}
        </div >
    );
}

export default WatchPlaylist;