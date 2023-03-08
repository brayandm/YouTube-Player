import './PlaylistVideoPanel.css';
import VideoCardPlaylist from './VideoCardPlaylist';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlaylistVideoPanel({ videos, playlistId, min }) {

    console.log("Here", playlistId)
    function onDelete(videoId) {

        console.log(videoId)

        console.log(playlistId)

        axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`)
            .then((responsePlaylist) => {
                console.log(responsePlaylist.data);

                let newVideos = responsePlaylist.data.videos.filter((video) => {
                    return video.videoId !== videoId;
                });

                axios.put(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`, {
                    "name": responsePlaylist.data.name,
                    "videos": newVideos
                })
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    }
                    );

            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={"playlist-video-panel " + (min ? "min" : "")}>
            {videos.map((video, index) => {
                return (
                    <Link to={`/playlists/${playlistId}/videos/${video.videoId}`}>
                        <VideoCardPlaylist key={index} video={video} delay={index * 0.05} onDelete={onDelete} />
                    </Link>
                );
            }
            )}
        </div >
    );
}

export default PlaylistVideoPanel;