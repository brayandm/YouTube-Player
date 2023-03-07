import './Search.css';
import { useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

function Search({ defaultSearch = '', isIndex = false, isAdding = false }) {

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
                <div className='video-card-container'>
                    {isAdding && <i className='icon-plus-sign'></i>}
                    <Link to={`/videos/${video.id.videoId}?q=${search}`}>
                        <VideoCard video={video} isIndex={isIndex} isAdding={isAdding} delay={index * 0.05} />
                    </Link>
                </div>
            </li>
        }
        )
        videos = <ul className='search-list'> {videos} </ul>
    }

    let timerId;

    function handleInputChange(event) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            setSearch(event.target.value);
        }, 500);
    }

    return (
        <div className={"search" + (isIndex ? " index" : "")}>
            <div className="search-bar">
                <input className="search-input" type="text" placeholder="Search" onChange={handleInputChange} />
                <div className="search-icon">
                    <i className="icon-search"></i>
                </div>
            </div>
            {error && <div></div>}
            {isLoading && <div></div>}
            {videos}
        </div>
    );
}

export default Search;
