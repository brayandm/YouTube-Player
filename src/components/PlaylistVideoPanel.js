import './PlaylistVideoPanel.css';
import VideoCardPlaylist from './VideoCardPlaylist';

function PlaylistVideoPanel({ videos }) {

    return (
        <div className="playlist-video-panel">
            {videos.map((video, index) => {
                return (
                    <VideoCardPlaylist key={index} video={video} />
                );
            }
            )}
        </div >
    );
}

export default PlaylistVideoPanel;