import './App.css';
import Search from './components/Search';
import VideoPlayer from './components/VideoPlayer';

function App() {

  return (
    <div className="App">
      <h1>YouTube Clone</h1>
      <VideoPlayer />
      <Search />
    </div>
  );
}

export default App;
