import './YouTubePlayer.css';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import { useParams } from 'react-router-dom';

function YouTubePlayer() {

    const { videoId } = useParams();

    return (
        <div className="youtube-player">
            <VideoPlayer videoId={videoId} />
            <Search />
        </div>
    );
}

export default YouTubePlayer;
