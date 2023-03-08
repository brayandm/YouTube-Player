import './PlaylistPlayer.css';
import VideoPlayer from './VideoPlayer';
import PlaylistVideoPanel from './PlaylistVideoPanel';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function PlaylistPlayer() {

    const { playlistId, videoId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
        fetcher,
        { refreshInterval: 100 }
    );

    if (data) {
        console.log(data.videos)
    }

    return (
        <div className="playlist-player">
            <VideoPlayer videoId={videoId} />
            {error && <div></div>}
            {isLoading && <div></div>}
            {data &&
                <PlaylistVideoPanel videos={data.videos} playlistId={playlistId} />}
        </div>
    );
}

export default PlaylistPlayer;