import './VideoCard.css';
import { formatView } from '../helpers/FormatHelper';

function VideoCard({ video, isIndex }) {
    return (
        <div className={'video-card' + (isIndex ? " index" : "")}>
            <img className={"video-thumbnail" + (isIndex ? " index" : "")} src={video.snippet.thumbnails.url} alt={video.title} />
            <div className="video-card-right-side">
                <p className={"video-title" + (isIndex ? " index" : "")}>{video.title.length > 50 ? video.title.substring(0, 50) + "..." : video.title}</p>
                <p className={"video-views" + (isIndex ? " index" : "")}>{formatView(video.views)} views</p>
            </div>
        </div>
    );
}

export default VideoCard;
