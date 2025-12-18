"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxHero = ({ slides, currentSlide, setCurrentSlide, lang }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.05,
          }}
          transition={{ duration: 1.4, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="absolute inset-0"
        >
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-amber-900/10 to-transparent opacity-40" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            <motion.div
              key={`tag-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
              <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase">
                {slides[currentSlide]?.tagline || ""}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
            </motion.div>

            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mb-10 text-balance text-shadow-lg"
            >
              {slides[currentSlide]?.title || ""}
            </motion.h1>

            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-12 font-light text-shadow"
            >
              {slides[currentSlide]?.description || ""}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              href="#about"
              className="group inline-flex items-center gap-4 glass-strong px-8 py-4 rounded-full hover:bg-amber-500/20 hover:shadow-glow transition-all duration-500"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-white">
                {lang === "am" ? "ተጨማሪ ይመልከቱ" : "Explore More"}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-500">
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-6 md:left-20 lg:left-32 bottom-16 z-20 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
          >
            <div
              className={`h-14 w-1 rounded-full transition-all duration-700 ${
                currentSlide === index
                  ? "bg-gradient-to-b from-amber-400 to-amber-600 shadow-glow"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
            {currentSlide === index && (
              <motion.div
                layoutId="activeSlide"
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 border-amber-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="absolute right-6 md:right-20 lg:right-32 bottom-16 z-20 font-serif">
        <div className="text-right">
          <span className="text-white text-5xl md:text-6xl font-bold block leading-none">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center justify-end gap-3 mt-2">
            <div className="h-px w-8 bg-gradient-to-l from-amber-500 to-transparent" />
            <span className="text-white/40 text-sm">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-6 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div className="w-1.5 h-2.5 bg-amber-400 rounded-full" />
          </div>
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxHero;
