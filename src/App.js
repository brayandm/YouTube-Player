import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Search />} />
            <Route path="videos/:videoId" element={<YouTubePlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
