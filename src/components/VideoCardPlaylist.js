import './VideoCardPlaylist.css';

function VideoCardPlaylist({ video }) {
    return (
        <div className="video-card-playlist">
            <img className="video-thumbnail-playlist" src={video.thumbnail} alt={video.title} />
        </div>
    );
}

export default VideoCardPlaylist;
