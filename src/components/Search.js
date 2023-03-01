import './Search.css';
import { useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Search() {

    const [search, setSearch] = useState('');

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/search?q=${search}`,
        fetcher
    );

    let videos = [];

    if (Array.isArray(data)) {
        videos = data.map((video) =>
            <li key={video.id.videoId}>
                <div className='search-video-card'>
                    <Link to={`/videos/${video.id.videoId}`}>
                        <img className="search-video-thumbnail" src={video.snippet.thumbnails.url} alt={video.title} />
                    </Link>
                    <Link to={`/videos/${video.id.videoId}`}>
                        <p className="search-video-title">{video.title.length > 50 ? video.title.substring(0, 50) + "..." : video.title}</p>
                    </Link>
                </div>
            </li>
        )
        videos = <ul className='search-list'> {videos} </ul>
    }

    return (
        <div className="search">
            <div className="search-bar">
                <input className="search-input" type="text" value={search} placeholder="Search" onChange={(e) => { setSearch(e.target.value) }} />
                <div className="search-icon">
                    <i class="icon-search"></i>
                </div>
            </div>
            {error && <div>Failed to load</div>}
            {isLoading && <div>Loading...</div>}
            {videos}
        </div>
    );
}

export default Search;
