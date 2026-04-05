import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from './composant/NavBar';
import Naruto from './pages/Naruto';
import DBZ from './pages/DBZ';
import OnePiece from './pages/OnePiece';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Naruto />} />
          <Route path="/naruto" element={<Naruto />} />
          <Route path="/dbz" element={<DBZ />} />
          <Route path="/onepiece" element={<OnePiece />} />
        </Routes>
      </main>
    </>
  );
}

export default App;