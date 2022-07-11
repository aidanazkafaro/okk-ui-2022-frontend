import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import PageMisi from "./pages/PageMisi";
import PageKelompok from './pages/PageKelompok'
import PageBerita from './pages/PageFAQ'
import PageKontak from "./pages/PageKontak";
import PageNotFound from "./pages/PageNotFound";
import FAQ from "./components/FAQ/FAQ";
import PageFAQ from "./pages/PageFAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Misi" element={<PageMisi />} />
        <Route path="/Kelompok" element={<PageKelompok />} />
        <Route path="/Berita" element={<PageBerita />} />
        <Route path="/faq" element={<PageFAQ />} />
        <Route path="/Kontak" element={<PageKontak />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
