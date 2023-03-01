import './YouTubePlayer.css';
import Search from './Search';
import VideoPlayer from './VideoPlayer';

function YouTubePlayer() {

    return (
        <div className="youtube-player">
            <h1>YouTube Clone</h1>
            <VideoPlayer />
            <Search />
        </div>
    );
}

export default YouTubePlayer;
