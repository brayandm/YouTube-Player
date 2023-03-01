import './Search.css';
import { useState } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { formatView } from '../helpers/FormatHelper';

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
        videos = data.map((video) => {
            return <li key={video.id.videoId + "." + time}>
                <Link to={`/videos/${video.id.videoId}?q=${search}`}>
                    <div className={'search-video-card' + (isIndex ? " index" : "")}>
                        <img className={"search-video-thumbnail" + (isIndex ? " index" : "")} src={video.snippet.thumbnails.url} alt={video.title} />
                        <div className="search-video-card-right-side">
                            <p className={"search-video-title" + (isIndex ? " index" : "")}>{video.title.length > 50 ? video.title.substring(0, 50) + "..." : video.title}</p>
                            <p className={"search-video-views" + (isIndex ? " index" : "")}>{formatView(video.views)} views</p>
                        </div>
                    </div>
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
