import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage"
import LandingPage from "./pages/Landing"
import Navbar from "./components/nav/Navbar"
import Blog from "./components/blog/Blog"
// import Services from "./pages/Services";
// // import Blog from "./pages/Blog";
import ProductPage from "./pages/ProductPage"
import ContactPage from "./pages/ContactPage"
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
             <Route path="/" element={<LandingPage />} />
             <Route path="/products" element={<ProductPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/contact" element={<ContactPage />} />
             <Route path="/blog" element={<Blog />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            
            {/* <Route path="/blog" element={<Blog />} /> */}
          
          </Routes>
        </main>
      </div>
    </Router>
  );
}
