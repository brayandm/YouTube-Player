import './PlaylistPlayer.css';
import VideoPlayer from './VideoPlayer';
import { useParams } from 'react-router-dom';

function PlaylistPlayer() {

    const { playlistId, videoId } = useParams();

    return (
        <div className="playlist-player">
            <VideoPlayer videoId={videoId} />
        </div>
    );
}

export default PlaylistPlayer;