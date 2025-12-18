import React, { useState, useEffect } from "react";
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
  ArrowUp,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";
import { content } from "./data";
import Home from "./Home";
import About from "./About";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ lang, toggleLang, t }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t.nav.home, isRoute: true },
    { to: "/about", label: t.nav.about, isRoute: true },
    { to: "/#gallery", label: t.nav.gallery, isRoute: false },
    { to: "/#courses", label: t.nav.courses, isRoute: false },
    { to: "/#location", label: t.nav.location, isRoute: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-40 top-0 left-0 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
              <Music className="text-black" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              {lang === "am" ? "አቤል" : "ABEL"}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-[0.15em] uppercase text-white/80">
            {navLinks.map((link, i) =>
              link.isRoute ? (
                <Link
                  key={i}
                  to={link.to}
                  className={`hover:text-amber-400 transition-colors relative group py-2 ${
                    location.pathname === link.to ? "text-amber-400" : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      location.pathname === link.to
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.to}
                  className="hover:text-amber-400 transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs font-bold tracking-wider text-white/80 hover:bg-white hover:text-black hover:shadow-glow transition-all duration-300"
            >
              {lang === "am" ? "EN" : "አማ"}
            </button>

            <a
              href="tel:0912674600"
              className="hidden md:flex items-center gap-2 bg-amber-500 text-black font-bold px-5 py-2.5 rounded-full text-xs tracking-wider hover:bg-amber-400 hover:shadow-glow transition-all duration-300"
            >
              <Phone size={14} />
              <span>{lang === "am" ? "ይደውሉ" : "Call Us"}</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white z-50 w-10 h-10 flex items-center justify-center"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 bg-[#0a0a0a] z-30 flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl font-light text-white hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl font-light text-white hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pb-10 flex flex-col items-center gap-6">
              <button
                onClick={() => {
                  toggleLang();
                  setMenuOpen(false);
                }}
                className="text-amber-500 font-bold tracking-widest uppercase text-sm"
              >
                {lang === "am" ? "Switch to English" : "ወደ አማርኛ ቀይር"}
              </button>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com/abel_begena"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-amber-400 transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = ({ t, lang }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] relative">
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-20 pt-20 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-10"
              >
                {t.footer.talk}
              </motion.h2>
              <div className="space-y-6">
                <a
                  href="tel:0912674600"
                  className="group flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 group-hover:shadow-glow-sm transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <span className="text-xl">091 267 4600</span>
                </a>
                <a
                  href="mailto:info@abelbegena.com"
                  className="group flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-xl">info@abelbegena.com</span>
                </a>
                <a
                  href="https://instagram.com/abel_begena"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-xl">@abel_begena</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase mb-6">
                  {t.footer.followUs}
                </h3>
                <div className="flex gap-4 mb-10">
                  <a
                    href="https://instagram.com/abel_begena"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-amber-500 hover:border-amber-500 hover:text-black hover:shadow-glow transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all"
                  >
                    <Youtube size={20} />
                  </a>
                </div>

                <div className="flex items-start gap-4 text-gray-500">
                  <MapPin
                    size={20}
                    className="text-amber-500 flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-white mb-1">
                      {lang === "am" ? "ዋና ቢሮ" : "Main Office"}
                    </p>
                    <p>
                      {lang === "am"
                        ? "ፒያሳ፣ አባቢያ ራመት ታቦር ህንጻ 4ተኛ ፎቅ"
                        : "Piassa, Ababiya Ramet Tabor Bldg, 4th Floor"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Music className="text-black" size={20} />
                  </div>
                  <span className="text-white font-bold">
                    {lang === "am" ? "አቤል በገና" : "Abel Begena"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 px-6 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-semibold tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Abel Begena School.</p>
          <p>{t.footer.rights}</p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-glow-lg hover:bg-amber-400 hover:shadow-glow-xl hover:scale-110 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

const App = () => {
  const [lang, setLang] = useState("am");
  const t = content[lang];

  const toggleLang = () => setLang((prev) => (prev === "am" ? "en" : "am"));

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#0d0d0d] text-[#e0e0e0] font-sans min-h-screen selection:bg-amber-600/30 selection:text-amber-500 overflow-x-hidden">
        <Navbar lang={lang} toggleLang={toggleLang} t={t} />

        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>

        <Footer t={t} lang={lang} />
      </div>
    </Router>
  );
};

export default App;
