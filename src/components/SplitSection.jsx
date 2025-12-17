import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SplitSection = ({ 
  image, 
  title, 
  subtitle, 
  description, 
  stats, 
  reverse = false,
  children 
}) => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <motion.div 
        className={`w-full lg:w-1/2 relative overflow-hidden ${reverse ? 'lg:order-2' : ''}`}
      >
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-${reverse ? 'l' : 'r'} from-transparent to-black/30`} />
        </motion.div>
        {stats && (
          <div className="absolute bottom-10 left-10 right-10 flex gap-8 z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-bold text-white">{stat.value}</span>
                <span className="text-amber-400 text-2xl">+</span>
                <p className="text-white/70 text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <div className={`w-full lg:w-1/2 flex items-center ${reverse ? 'lg:order-1' : ''}`}>
        <div className="py-20 lg:py-0 px-8 md:px-16 lg:px-20 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4"
          >
            {subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed mb-10"
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
