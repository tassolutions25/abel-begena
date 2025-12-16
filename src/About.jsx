// src/About.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Anchor, Clock } from "lucide-react";
import { content } from "./data"; // Import data

const About = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const t = content[lang];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#111111] text-gray-200">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase block mb-4">
            {t.aboutPage.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {t.aboutPage.title}
          </h1>
        </motion.div>

        {/* Tab System */}
        <div className="flex flex-col md:flex-row gap-16 border-t border-white/10 pt-16">
          {/* Left: Tab Navigation */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col gap-4">
              {t.aboutPage.tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left pl-6 py-4 text-2xl md:text-3xl font-serif border-l-2 transition-all duration-300 ${
                    activeTab === idx
                      ? "border-yellow-500 text-white translate-x-2 font-bold bg-white/5"
                      : "border-white/10 text-gray-600 hover:text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Display */}
          <div className="w-full md:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-yellow-600 mb-8">
                  {activeTab === 0 && <BookOpen size={32} />}
                  {activeTab === 1 && <Clock size={32} />}
                  {activeTab === 2 && <Anchor size={32} />}
                  <h3 className="text-3xl font-bold uppercase tracking-widest">
                    {t.aboutPage.content[activeTab].head}
                  </h3>
                </div>

                <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
                  {t.aboutPage.content[activeTab].body}
                </p>

                {/* Render List (Symbolism) */}
                {t.aboutPage.content[activeTab].list && (
                  <div className="grid md:grid-cols-2 gap-4 mt-12">
                    {t.aboutPage.content[activeTab].list.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#1a1a1a] p-8 border border-white/5 rounded-sm hover:border-yellow-500/30 transition-colors"
                      >
                        <h4 className="text-yellow-500 font-bold mb-2 uppercase tracking-wider">
                          {item.k}
                        </h4>
                        <p className="text-gray-400">{item.v}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render Quote */}
                {t.aboutPage.content[activeTab].quote && (
                  <div className="mt-12 pl-8 border-l-4 border-yellow-600 italic text-2xl text-gray-500 font-serif">
                    {t.aboutPage.content[activeTab].quote}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
