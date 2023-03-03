import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Search from './components/Search';
import Playlists from './components/Playlists';
import CreatePlaylist from './components/CreatePlaylist';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Search isIndex={true} />} />
            <Route path="videos/:videoId" element={<YouTubePlayer />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="playlists/create" element={<CreatePlaylist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
