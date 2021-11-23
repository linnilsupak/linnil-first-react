import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import PlayGround from './pages/PlayGround/PlayGround';
import SoNavbar from './components/SoNavbar/SoNavbar';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <SoNavbar />
      <div className="container pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="playground" element={<PlayGround />} />
          <Route path="404" element={ NotFound} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
