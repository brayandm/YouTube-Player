import './YouTubePlayer.css';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import Layout from './Layout';

function YouTubePlayer() {

    return (
        <div className="youtube-player">
            <Layout />
            <VideoPlayer />
            <Search />
        </div>
    );
}

export default YouTubePlayer;
