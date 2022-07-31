import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import PageMisi from "./pages/PageMisi";
import PageKelompok from './pages/PageKelompok'
import PageBerita from './pages/PageFAQ'
import PageKontak from "./pages/PageKontak";
import PageFAQ from "./pages/PageFAQ";
import PageMerch from "./pages/PageMerch";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Misi" element={<PageMisi />} />
        <Route exact path="/Kelompok" element={<PageKelompok />} />
        <Route exact path="/Berita" element={<PageBerita />} />
        <Route exact path="/faq" element={<PageFAQ />} />
        <Route exact path="/Kontak" element={<PageKontak />} />
        <Route exact path="/Merch" element={<PageMerch />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
