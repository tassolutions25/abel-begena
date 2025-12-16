import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "./data";

const Home = ({ lang }) => {
  const t = content[lang];
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 md:pt-0"
      >
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-20 lg:pl-32 z-10 order-2 md:order-1 mt-10 md:mt-0 pb-20 md:pb-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-600 tracking-[0.3em] text-xs font-bold uppercase mb-6 block"
          >
            {t.hero.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-white mb-8"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg max-w-md leading-relaxed mb-10"
          >
            {t.hero.desc}
          </motion.p>
          <div className="flex gap-6">
            {/* Link to the new About Page */}
            <Link
              to="/about"
              className="px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-xs flex items-center gap-2"
            >
              About Begena <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden order-1 md:order-2 px-4 md:px-10 py-4 md:py-10">
          <motion.div style={{ y: yHero }} className="w-full h-full relative">
            <div className="w-full h-full rounded-t-[1000px] rounded-b-[10px] overflow-hidden relative border border-white/5">
              <img
                src="/images/abel23.jpg"
                alt="Hero"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COURSES --- */}
      <section id="courses" className="py-32 px-6 md:px-20 bg-[#111111]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {t.courses.title}
          </h2>
          <span className="text-gray-500 text-sm tracking-widest uppercase hidden md:block">
            Scroll to explore
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {t.courses.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`group cursor-pointer ${
                i % 2 !== 0 ? "md:translate-y-24" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
                <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex justify-between items-start border-t border-white/20 pt-4">
                <div>
                  <span className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl text-white font-serif">
                    {item.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight
                    size={16}
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LOCATIONS --- */}
      <section
        id="location"
        className="py-32 bg-[#0d0d0d] px-6 md:px-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 text-[20vw] font-bold text-white/5 leading-none select-none pointer-events-none">
          LOC
        </div>
        <h2 className="text-xs font-bold tracking-[0.4em] text-yellow-500 uppercase mb-20">
          {t.locations.title}
        </h2>
        <div className="space-y-4">
          {t.locations.list.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-white/10 py-10 flex flex-col md:flex-row items-baseline md:items-center justify-between hover:bg-white/5 hover:px-10 transition-all duration-500 cursor-default"
            >
              <div className="flex items-baseline gap-10">
                <span className="text-xl text-gray-600 font-mono">
                  0{i + 1}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-gray-400 group-hover:text-white transition-colors">
                  {loc.city}
                </h3>
              </div>
              <p className="text-gray-500 mt-4 md:mt-0 font-light group-hover:text-yellow-500 transition-colors">
                {loc.address}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
