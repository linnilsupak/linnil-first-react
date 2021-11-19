import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PlayBoard from './pages/PlayBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="play-board" element={<PlayBoard />} />
      </Routes>
    </div>
  );
}

export default App;
