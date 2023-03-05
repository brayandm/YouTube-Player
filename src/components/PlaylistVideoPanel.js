import './PlaylistVideoPanel.css';

function PlaylistVideoPanel({ videos }) {

    return (
        <div className="playlist-video-panel">
            {videos.map((video) => {
                return (
                    <div className="playlist-video-panel-video">
                        <p>{video.videoId}</p>

                    </div >
                );
            }
            )}
        </div >
    );
}

export default PlaylistVideoPanel;