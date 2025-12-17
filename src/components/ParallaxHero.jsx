import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxHero = ({ slides, currentSlide, setCurrentSlide, lang }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <motion.div style={{ y }} className="absolute inset-0">
            <div
              className="w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <motion.span
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-6"
            >
              {slides[currentSlide]?.tagline || ""}
            </motion.span>
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8"
            >
              {slides[currentSlide]?.title || ""}
            </motion.h1>
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-10"
            >
              {slides[currentSlide]?.description || ""}
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              href="#about"
              className="group inline-flex items-center gap-4 text-white font-semibold"
            >
              <span className="uppercase tracking-widest text-sm">
                {lang === "am" ? "ተጨማሪ ይመልከቱ" : "Explore More"}
              </span>
              <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-6 md:left-20 bottom-10 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "bg-amber-500 w-16"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute right-6 md:right-20 bottom-10 z-20 text-white/40 font-mono text-sm">
        <span className="text-white text-2xl font-bold">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
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
  );
};

export default ParallaxHero;
