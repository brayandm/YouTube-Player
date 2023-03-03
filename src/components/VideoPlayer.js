import './VideoPlayer.css';
import useSWR from 'swr';
import { formatView } from '../helpers/FormatHelper';
import CopyLink from './CopyLink';

const fetcher = (url) => fetch(url).then((res) => res.json());

function VideoPlayer({ videoId }) {

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
        fetcher
    );

    return (
        <div className="video-player">
            <iframe className="video-player-iframe" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {error && <div></div>}
            {isLoading && <div></div>}
            {data && <div className="video-player-info">
                <div className="video-player-title-info">
                    <h2 className="video-player-title">{data.title}</h2>
                    <div className="video-player-extra">
                        <p className="video-player-views"><b>{formatView(data.views)} views</b> </p>
                        <CopyLink link={window.location.origin + window.location.pathname} />
                    </div>
                </div>
                <p className="video-player-description">{data.description}</p>
            </div>}
        </div >
    );
}

export default VideoPlayer;
