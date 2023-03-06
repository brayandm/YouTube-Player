import './Room.css';
import useSWR from 'swr';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Room() {

    const { roomId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${roomId}`,
        fetcher
    );

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="room">
            {error && <div></div>}
            {isLoading && <div></div>}
            {data && <YouTube videoId={data.videoId} opts={opts} />}
        </div >
    );
}

export default Room;