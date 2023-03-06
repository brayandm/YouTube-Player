import './WatchPlaylist.css';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import PlaylistVideoPanel from './PlaylistVideoPanel';

const fetcher = (url) => fetch(url).then((res) => res.json());

function WatchPlaylist() {

    const { playlistId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
        fetcher
    );

    let playlistName = "";

    if (data) {
        for (let i = data.name.length - 1; i >= 0; i--) {
            if (data.name[i] === '+') {
                playlistName = data.name.substring(0, i);
                break;
            }
        }
    }

    return (
        <div className="watch-playlist">

            {error && <div></div>}
            {isLoading && <div></div>}
            {data && <div>

                <div className='watch-playlist-top-container'>
                    <div>
                        <h2> Id: {playlistId}</h2>
                        <h1>Playlist: {playlistName} </h1>
                    </div>
                    <div className='watch-playlist-add-video'>
                        <h3>
                            Add Video
                        </h3>
                        <i className='icon-plus'> </i>
                    </div>
                </div>
                <PlaylistVideoPanel videos={data.videos} />
            </div>}
        </div >
    );
}

export default WatchPlaylist;