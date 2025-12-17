import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Anchor, Clock, ChevronRight, Play } from "lucide-react";
import { content } from "./data";
import SkillBars from "./components/SkillBars";
import Gallery from "./components/Gallery";

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const t = content[lang];

  /* Removed hardcoded tabs and content */

  // No local content needed, using t.aboutBegena from data.js

  // Map icon names to Lucide React components
  const iconMap = {
    BookOpen: BookOpen,
    Clock: Clock,
    Anchor: Anchor,
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200">
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/abel53.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d0d0d]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-400 font-bold text-xs tracking-[0.4em] uppercase block mb-6"
            >
              {lang === "am" ? "ታሪክና ትርጓሜ" : "History & Symbolism"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              {lang === "am" ? "ስለ በገና" : "About Begena"}
            </motion.h1>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-3">
                {t.aboutBegena.sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-6 py-5 flex items-center justify-between rounded-lg transition-all duration-300 group ${
                      activeTab === idx
                        ? "bg-amber-500/10 border-l-4 border-amber-500 text-white"
                        : "bg-white/[0.02] border-l-4 border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-amber-500 font-mono text-sm">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-serif">
                        {section.heading}
                      </span>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`transition-transform ${
                        activeTab === idx ? "rotate-90 text-amber-500" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/3 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 text-amber-500 mb-8">
                    {activeTab === 0 && <BookOpen size={36} />}
                    {activeTab === 1 && <Clock size={36} />}
                    {activeTab === 2 && <Anchor size={36} />}
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {t.aboutBegena.sections[activeTab].heading}
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light whitespace-pre-line">
                    {t.aboutBegena.sections[activeTab].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src="/images/abel5.jpg"
                  alt="Abel playing Begena"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center hover:scale-110 transition-transform group">
                    <Play
                      size={32}
                      className="text-white ml-1 group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-amber-500/30 rounded-lg -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                {lang === "am" ? "ስለ ትምህርት ቤቱ" : "About The School"}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {t.about.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {t.about.description}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {t.about.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-4 bg-white/[0.02] rounded-lg"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-amber-500">
                      {stat.value}
                    </span>
                    <span className="text-amber-400 text-xl">+</span>
                    <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <SkillBars skills={t.skills.slice(0, 2)} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
              {t.gallery.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t.gallery.title}
            </h2>
          </motion.div>

          <Gallery images={t.gallery.images} lang={lang} />
        </div>
      </section>
    </div>
  );
};

export default About;
