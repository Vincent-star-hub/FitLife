import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { Activity, Menu, X, Face } from "lucide-react";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import Nutrition from "./components/Nutrition";
import HealthTips from "./components/HealthTips";
import About from "./components/About";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/FitLife" className="flex items-center space-x-2">
                <Activity className="text-blue-600 w-8 h-8" />
                <span className="text-xl font-bold text-gray-800">FitLife</span>
              </Link>
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLinks />
              </div>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
              </div>
            )}
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/FitLife" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/healthtips" element={<HealthTips />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <NavLinks footer />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@fitlife.com</p>
                <p>Phone: (09) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <button
                    className="flex items-center space-x-2 hover:text-blue-400"
                    onClick={() =>
                      window.open("https://instagram.com", "_blank")
                    }
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 hover:text-blue-400"
                    onClick={() =>
                      window.open("https://facebook.com", "_blank")
                    }
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 hover:text-blue-400"
                    onClick={() => window.open("https://twitter.com", "_blank")}
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; 2025 FitLife. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const NavLinks = ({ mobile, footer, setIsMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate(path); // Navigate to the clicked page
    if (mobile) {
      setIsMenuOpen(false); // Close the mobile menu
    }
  };

  const baseClasses = footer
    ? "block text-gray-300 hover:text-white mb-2"
    : mobile
    ? "block py-2 text-gray-800 hover:text-blue-600"
    : "text-gray-800 hover:text-blue-600";

  return (
    <>
      <button
        className={`${baseClasses}`}
        onClick={() => handleNavigation("/FitLife")}
      >
        Home
      </button>
      <button
        className={`${baseClasses}`}
        onClick={() => handleNavigation("/workouts")}
      >
        Workouts
      </button>
      <button
        className={`${baseClasses}`}
        onClick={() => handleNavigation("/nutrition")}
      >
        Nutrition
      </button>
      <button
        className={`${baseClasses}`}
        onClick={() => handleNavigation("/healthtips")}
      >
        HealthTips
      </button>
      <button
        className={`${baseClasses}`}
        onClick={() => handleNavigation("/about")}
      >
        About
      </button>
    </>
  );
};

export default App;
