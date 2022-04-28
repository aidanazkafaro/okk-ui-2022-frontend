import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import PageMisi from "./pages/PageMisi";
import PageKelompok from './pages/PageKelompok'
import PageBerita from './pages/PageBerita'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageMisi" element={<PageMisi />} />
        <Route path="/PageKelompok" element={<PageKelompok />} />
        <Route path="/PageBerita" element={<PageBerita />} />
        <Route path="/faq" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
