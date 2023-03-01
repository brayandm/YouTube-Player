import './VideoPlayer.css';

function VideoPlayer({ videoId }) {

    return (
        <div className="video-player">
            <iframe className="video-player-iframe" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div >
    );
}

export default VideoPlayer;
