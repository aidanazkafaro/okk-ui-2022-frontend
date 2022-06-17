  import "./App.css";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Home from "./pages";
  import PageMisi from "./pages/PageMisi";
  import PageKelompok from './pages/PageKelompok'
  import PageBerita from './pages/PageBerita'
  import PageNotFound from "./pages/PageNotFound";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageMisi" element={<PageMisi />} />
          <Route path="/PageKelompok" element={<PageKelompok />} />
          <Route path="/PageBerita" element={<PageBerita />} />
          <Route path="/faq" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
    );
  }

  export default App;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App(){
//   const notify = () => toast("Wow so easy!");
//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;