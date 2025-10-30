import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage"
import LandingPage from "./pages/Landing"
import Navbar from "./components/nav/Navbar"
// import Services from "./pages/Services";
// // import Blog from "./pages/Blog";
import ProductPage from "./pages/ProductPage"
import ContactPage from "./pages/ContactPage"
import IqRetailPage from "./pages/IqRetailPge";
import PalladiumPage from "./pages/PalladiumPage";
import Sage200Page from "./pages/Sage200Page";
import XactErpPage from "./pages/XactErPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AdminBlogPage from "./pages/AdminBlogPage";
import BlogList from "./pages/BlogList";
import Login from "./components/auth/Login";
import Verification from "./components/auth/Verification";
import Register from "./components/auth/Register";
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
             <Route path="/" element={<LandingPage />} />


<Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verification />} />
             
             <Route path="/products" element={<ProductPage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/contact" element={<ContactPage />} />
             
             <Route path="/products/palladium-accounting" element={<PalladiumPage />} />
<Route path="/products/iq-retail" element={<IqRetailPage />} />
<Route path="/products/xact-erp" element={<XactErpPage />} />
<Route path="/products/sage-200" element={<Sage200Page />} />


<Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/admin/blog" element={<AdminBlogPage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            
            {/* <Route path="/blog" element={<Blog />} /> */}
          
          </Routes>
        </main>
      </div>
    </Router>
  );
}
