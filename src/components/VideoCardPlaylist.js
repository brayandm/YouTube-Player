import './VideoCardPlaylist.css';

function VideoCardPlaylist({ video }) {
    return (
        <div className="video-card-playlist">
            <div className="video-card-playlist-container-img">
                <img className="video-thumbnail-playlist" src={video.thumbnail} alt={video.title} />
                <p className='video-card-playlist-views'> {video.views} </p>
                <p className='video-card-playlist-title'> {video.title.length > 50 ? video.title.substring(0, 50) + "..." : video.title} </p>
            </div>
        </div>
    );
}

export default VideoCardPlaylist;
