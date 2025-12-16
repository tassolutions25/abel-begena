import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Phone,
  Menu,
  X,
  Music,
  ArrowRight,
} from "lucide-react";
import { content } from "./data";
import Home from "./Home";
import About from "./About";

// Helper component to conditionally scroll to hash links or page top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [lang, setLang] = useState("am");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  const toggleLang = () => setLang((prev) => (prev === "am" ? "en" : "am"));

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#111111] text-[#e0e0e0] font-sans min-h-screen selection:bg-yellow-600/30 selection:text-yellow-500 overflow-x-hidden">
        {/* Noise Texture */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
          style={{
            backgroundImage: `url("/images/logo.jpg")`,
          }}
        ></div>

        {/* --- GLOBAL NAVBAR --- */}
        <nav className="fixed w-full z-40 top-0 left-0 p-6 md:p-10 flex justify-between items-center mix-blend-difference">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-2"
          >
            <Music className="text-yellow-500" />{" "}
            {lang === "am" ? "አቤል." : "ABEL."}
          </Link>

          <div className="hidden md:flex items-center gap-12 text-xs font-bold tracking-[0.2em] uppercase text-white/80">
            <Link to="/" className="hover:text-yellow-500 transition-colors">
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.about}
            </Link>
            <a
              href="/#courses"
              className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.courses}
            </a>
            <a
              href="/#location"
              className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.location}
            </a>
            <button
              onClick={toggleLang}
              className="border border-white/30 rounded-full px-4 py-1 hover:bg-white hover:text-black transition-all"
            >
              {lang === "am" ? "EN" : "አማ"}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white z-50"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0f0f0f] z-30 flex flex-col items-center justify-center gap-8"
            >
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-white"
              >
                {t.nav.home}
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-white"
              >
                {t.nav.about}
              </Link>
              <button
                onClick={toggleLang}
                className="mt-8 text-yellow-500 font-bold tracking-widest"
              >
                SWITCH LANGUAGE
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- ROUTES --- */}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>

        {/* --- GLOBAL FOOTER --- */}
        <footer
          id="contact"
          className="bg-[#111111] pt-32 pb-10 px-6 md:px-20 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-10">
                {t.footer.talk}
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:0912674600"
                  className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-4"
                >
                  <Phone size={24} /> 091 267 4600
                </a>
                <a
                  href="https://instagram.com/abel_begena"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-4"
                >
                  <Instagram size={24} /> @abel_begena
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-4"
                >
                  <Youtube size={24} /> YouTube
                </a>
              </div>
            </div>
            <div className="mt-20 md:mt-0 flex flex-col items-end">
              <Link
                to="/"
                className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all mb-10 group"
              >
                <ArrowRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 text-xs text-gray-600 font-bold tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} ABEL BEGENA SCHOOL.</p>
            <p>{t.footer.rights}</p>
          </div>
        </footer>

        {/* CSS for animations */}
        <style>{`
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
