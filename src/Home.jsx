"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Users,
  Music,
  GraduationCap,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "./data";
import ParallaxHero from "./components/ParallaxHero";
import SplitSection from "./components/SplitSection";
import SkillBars from "./components/SkillBars";
import Gallery from "./components/Gallery";
import CourseCard from "./components/CourseCard";
import TestimonialSlider from "./components/TestimonialSlider";

const Home = ({ lang }) => {
  const t = content[lang];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.hero.slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [t.hero.slides.length]);

  const iconMap = {
    award: Award,
    users: Users,
    music: Music,
    certificate: GraduationCap,
  };

  return (
    <>
      <ParallaxHero
        slides={t.hero.slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        lang={lang}
      />

      <section id="about" className="bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/5 to-transparent" />

        <SplitSection
          image="/images/abel16.jpg"
          subtitle={t.about.subtitle}
          title={t.about.title}
          description={t.about.description}
          stats={t.about.stats}
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-4 text-white font-semibold"
          >
            <span className="uppercase tracking-[0.2em] text-sm hover:text-amber-400 transition-colors">
              {lang === "am" ? "ተጨማሪ ይመልከቱ" : "Learn More"}
            </span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:scale-110 transition-all duration-500">
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </SplitSection>
      </section>

      <section className="pt-20 md:pt-20 px-6 md:px-20 bg-[#080808] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217 119 6) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Sparkles size={20} className="text-amber-500" />
                <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                  {lang === "am" ? "የምንሰጣቸው ትምህርቶች" : "What We Teach"}
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-8 text-balance">
                {lang === "am" ? "የሙዚቃ ክህሎቶች" : "Musical Skills"}
              </h2>

              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
                {lang === "am"
                  ? "በሁሉም ደረጃ ያሉ ተማሪዎችን በባህላዊ ሙዚቃ መሳሪያዎች እናሰለጥናለን።"
                  : "We train students of all levels in traditional musical instruments."}
              </p>

              <SkillBars skills={t.skills} />
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/abel79.png"
                  alt="Begena"
                  className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-amber-500/30 rounded-2xl -z-0 group-hover:border-amber-500/50 transition-colors duration-500" />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl -z-0 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-20 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                {t.whyUs.title}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              {lang === "am" ? "ልዩ የሚያደርገን" : "Our Features"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="group relative overflow-hidden hover-lift"
                >
                  <div className="glass p-8 rounded-2xl hover:bg-white/[0.08] hover:border-amber-500/20 transition-all duration-500 h-full">
                    {/* Icon */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                        <Icon className="text-amber-500" size={28} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-amber-500/10 blur-xl group-hover:bg-amber-500/20 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="pt-20 md:pt-20 px-6 md:px-20 bg-[#080808]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
                <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                  {t.gallery.subtitle}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {t.gallery.title}
              </h2>
            </div>

            <Link
              to="/about"
              className="group flex items-center gap-3 text-amber-400 text-sm font-semibold uppercase tracking-wider hover:text-amber-300 transition-colors"
            >
              <span>{lang === "am" ? "ሁሉንም ይመልከቱ" : "View All"}</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          <Gallery images={t.gallery.images} lang={lang} />
        </div>
      </section>

      <section
        id="courses"
        className="pt-20 md:pt-20 px-6 md:px-20 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                {t.courses.subtitle}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t.courses.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.courses.items.map((course, i) => (
              <CourseCard key={i} course={course} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-20 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/logo.png')` }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                {lang === "am" ? "ምስክርነት" : "Testimonials"}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              {lang === "am" ? "ተማሪዎቻችን ምን ይላሉ?" : "What Our Students Say"}
            </h2>
          </motion.div>

          <TestimonialSlider testimonials={t.testimonials} lang={lang} />
        </div>
      </section>

      <section
        id="location"
        className="pt-20 md:pt-20 px-6 md:px-20 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 font-serif text-[20vw] font-bold text-white/[0.01] leading-none select-none pointer-events-none">
          አቤል
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin size={24} className="text-amber-500" />
              <span className="text-amber-500 font-semibold text-xs tracking-[0.3em] uppercase">
                {t.locations.subtitle}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t.locations.title}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {t.locations.list.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group glass rounded-2xl py-8 md:py-10 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.08] hover:border-amber-500/30 hover:shadow-glow-sm transition-all duration-500 cursor-default hover-lift"
              >
                <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-0">
                  <span className="font-serif text-3xl text-amber-500/40 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {loc.city}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm md:text-base">
                      {loc.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 glass px-5 py-3 rounded-full">
                  <Phone size={16} className="text-amber-500" />
                  <span className="text-white text-sm font-semibold">
                    {loc.phone}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 px-6 md:px-20 bg-[#080808]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/abel23.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/95 via-amber-700/95 to-amber-900/95" />
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-mesh opacity-20" />

          <div className="relative z-10 py-20 md:py-20 px-8 md:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                {lang === "am" ? "አሁኑኑ ይመዝገቡ!" : "Enroll Today!"}
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                {lang === "am"
                  ? "ከእኛ ጋር ተቀላቀሉና የባህላዊ ሙዚቃ ጥበብን ይማሩ። ለተጨማሪ መረጃ ያግኙን።"
                  : "Join us and learn the art of traditional music. Contact us for more information."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:0912674600"
                  className="group inline-flex items-center gap-3 bg-white text-amber-600 font-bold px-8 py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <Phone size={22} />
                  <span className="text-lg">091 267 4600</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-3 glass text-white font-semibold px-8 py-5 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <span>{lang === "am" ? "ተጨማሪ ይወቁ" : "Learn More"}</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
