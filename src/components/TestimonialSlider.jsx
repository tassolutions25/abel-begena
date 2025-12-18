"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = ({ testimonials, lang }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="relative pt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-amber-500/10">
        <Quote size={140} strokeWidth={1} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed mb-12 italic text-balance text-shadow">
              "{testimonials[current].quote}"
            </p>

            <div className="flex flex-col items-center">
              {testimonials[current].image && (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover mb-5 border-2 border-amber-500 shadow-glow-lg"
                />
              )}

              <h4 className="text-white font-bold text-xl mb-2">
                {testimonials[current].name}
              </h4>

              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
                <p className="text-amber-400 text-sm uppercase tracking-[0.2em] font-semibold">
                  {testimonials[current].role}
                </p>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-500" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? "bg-amber-500 w-8 shadow-glow"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:shadow-glow-sm transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
