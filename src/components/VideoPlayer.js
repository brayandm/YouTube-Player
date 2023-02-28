import './VideoPlayer.css';

function VideoPlayer() {

    return (
        <div className="video-player">
            <iframe className="video-player-iframe" src="https://www.youtube.com/embed/2g811Eo7K8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlayer;
