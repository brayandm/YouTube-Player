import './VideoPlayer.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function VideoPlayer({ videoId }) {

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
        fetcher
    );


    if (data)
        console.log(data)

    return (
        <div className="video-player">
            <iframe className="video-player-iframe" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {error && <div>Failed to load</div>}
            {isLoading && <div>Loading...</div>}
            {data && <div className="video-player-info">
                <div className="video-player-title-info">
                    <h2 className="video-player-title">{data.title}</h2>
                    <p className="video-player-views">{data.views} views</p>
                </div>
                <p className="video-player-description">{data.description}</p>
            </div>}
        </div >
    );
}

export default VideoPlayer;
