import './Search.css';
import { useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Search({ defaultSearch = '', isIndex = false }) {

    const [search, setSearch] = useState(defaultSearch);

    const { data, error, isLoading } = useSWR(
        `https://youtube.thorsteinsson.is/api/search?q=${search}`,
        fetcher
    );

    let videos = [];

    let time = new Date().getTime();

    if (Array.isArray(data)) {
        videos = data.map((video, index) => {
            return <li key={video.id.videoId + "." + time}>
                <Link to={`/videos/${video.id.videoId}?q=${search}`}>
                    <VideoCard video={video} isIndex={isIndex} delay={index * 0.05} />
                </Link>
            </li>
        }
        )
        videos = <ul className='search-list'> {videos} </ul>
    }

    return (
        <div className={"search" + (isIndex ? " index" : "")}>
            <div className="search-bar">
                <input className="search-input" type="text" value={search} placeholder="Search" onChange={(e) => { setSearch(e.target.value) }} />
                <div className="search-icon">
                    <i class="icon-search"></i>
                </div>
            </div>
            {error && <div>Failed to load</div>}
            {isLoading && <div></div>}
            {videos}
        </div>
    );
}

export default Search;
