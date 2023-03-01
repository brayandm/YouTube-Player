import './YouTubePlayer.css';
import Search from './Search';
import VideoPlayer from './VideoPlayer';

function YouTubePlayer() {

    return (
        <div className="youtube-player">
            <VideoPlayer />
            <Search />
        </div>
    );
}

export default YouTubePlayer;
