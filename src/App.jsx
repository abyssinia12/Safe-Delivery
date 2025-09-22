import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import CafeListPage from "./Pages/CafeListPage";
import ServicePage from "./Pages/ServicePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cafes" element={<CafeListPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
