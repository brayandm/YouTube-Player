import './WatchPlaylist.css';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import PlaylistVideoPanel from './PlaylistVideoPanel';
import { useState } from 'react';
import axios from 'axios';

const fetcher = (url) => fetch(url).then((res) => res.json());

function WatchPlaylist() {

    const { playlistId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
        fetcher,
        { refreshInterval: 100 }
    );

    const [videoId, setVideoId] = useState("");

    const [wait, setWait] = useState(false);

    function onclick() {

        setWait(true);

        axios.get(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, {
            "videoId": videoId
        }).then((response) => {
            console.log(response.data);

            axios.get(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`)
                .then((responsePlaylist) => {
                    console.log(responsePlaylist.data);

                    axios.put(`https://youtube.thorsteinsson.is/api/playlists/${playlistId}`, {
                        "name": responsePlaylist.data.name,
                        "videos": [...responsePlaylist.data.videos,
                        {
                            videoId: response.data.videoId,
                            thumbnail: response.data.thumbnailUrl,
                            title: response.data.title,
                            views: response.data.views,
                        }]
                    })
                        .then((response) => {
                            console.log(response.data);

                            setWait(false);
                        })
                        .catch((error) => {
                            console.log(error);

                            setWait(false);
                        }
                        );

                }).catch((error) => {
                    console.log(error);
                    setWait(false);
                });

        }).catch((error) => {
            console.log(error);
            setWait(false);
        });

    }

    return (
        <div className="watch-playlist">

            {error && <div></div>}
            {isLoading && <div></div>}
            {data && <div>

                <div className='watch-playlist-top-container'>
                    <div>
                        <h2> PlaylistId: {playlistId}</h2>
                        <h1> Name: {data.name} </h1>
                    </div>
                    <div className='watch-playlist-add-video'>
                        <h3>
                            Add VideoId:
                        </h3>
                        <input value={videoId} onChange={(e) => setVideoId(e.target.value)}></input>
                        {!wait ?
                            <div className='watch-playlist-add-video-icon'>
                                <i className='icon-plus' onClick={onclick}> </i>
                            </div> :
                            <div className='watch-playlist-add-video-icon hide'>
                                <i className='icon-plus' onClick={onclick}> </i>
                            </div>}
                    </div>
                </div>
                <PlaylistVideoPanel videos={data.videos} />
            </div>}
        </div >
    );
}

export default WatchPlaylist;