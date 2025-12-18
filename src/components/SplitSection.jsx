"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const SplitSection = ({
  image,
  title,
  subtitle,
  description,
  stats,
  reverse = false,
  children,
}) => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <motion.div
        className={`w-full lg:w-1/2 relative overflow-hidden ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <div
            className="w-full h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-${
              reverse ? "l" : "r"
            } from-transparent via-black/20 to-black/60`}
          />
        </motion.div>

        {stats && (
          <div className="absolute bottom-12 left-8 right-8 md:left-16 md:right-16 z-10">
            <div className="glass-strong p-8 rounded-2xl shadow-2xl">
              <div className="flex justify-around gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow">
                        {stat.value}
                      </span>
                      <span className="text-amber-400 text-3xl md:text-4xl font-light ml-1 animate-pulse">
                        +
                      </span>
                    </div>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-3" />
                    <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <div
        className={`w-full lg:w-1/2 flex items-center bg-[#0a0a0a] ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <div className="py-24 lg:py-0 px-8 md:px-16 lg:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-10 text-balance"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light"
          >
            {description}
          </motion.p>

          {children}
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
