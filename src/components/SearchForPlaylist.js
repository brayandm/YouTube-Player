import PlaylistVideoPanel from './PlaylistVideoPanel';
import Search from './Search';
import './SearchForPlaylist.css';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function SearchForPlaylist() {

    const { playlistId } = useParams();

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`,
        fetcher,
        { refreshInterval: 100 }
    );

    return (
        <div className='search-for-playlist'>
            {error && <div className='search-for-playlist-space'></div>}
            {isLoading && <div className='search-for-playlist-space'></div>}
            {data && <div>
                <div className='search-for-playlist-header'>
                    <h1> Name: {data.name} </h1>
                    <h2> PlaylistId: {playlistId}</h2>
                </div>
                <PlaylistVideoPanel videos={data.videos} min={true} />
            </div>
            }
            <div className='search-for-playlist-search'>
                <Search />
            </div>
        </div>
    );
}

export default SearchForPlaylist;
