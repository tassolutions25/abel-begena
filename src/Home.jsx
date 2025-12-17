import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Users,
  Music,
  GraduationCap,
  MapPin,
  Phone,
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

      <section id="about" className="bg-[#0d0d0d]">
        <SplitSection
          image="/images/abel42.png"
          subtitle={t.about.subtitle}
          title={t.about.title}
          description={t.about.description}
          stats={t.about.stats}
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-4 text-white font-semibold"
          >
            <span className="uppercase tracking-widest text-xs hover:text-amber-400 transition-colors">
              {lang === "am" ? "ተጨማሪ ይመልከቱ" : "Learn More"}
            </span>
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
        </SplitSection>
      </section>



      <section className="py-24 md:py-32 px-6 md:px-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                {lang === "am" ? "የምንሰጣቸው ትምህርቶች" : "What We Teach"}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
                {lang === "am" ? "የሙዚቃ ክህሎቶች" : "Musical Skills"}
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                {lang === "am"
                  ? "በሁሉም ደረጃ ያሉ ተማሪዎችን በባህላዊ ሙዚቃ መሳሪያዎች እናሰለጥናለን።"
                  : "We train students of all levels in traditional musical instruments."}
              </p>
              <SkillBars skills={t.skills} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src="/images/abel30.png"
                  alt="Begena"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-amber-500/30 rounded-lg -z-0" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-lg -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
              {t.whyUs.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {lang === "am" ? "ልዩ ባህሪያት" : "Our Features"}
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
                  transition={{ delay: i * 0.1 }}
                  className="group bg-[#151515] border border-white/5 p-8 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="text-amber-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="py-24 md:py-32 px-6 md:px-20 bg-[#111111]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
                {t.gallery.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                {t.gallery.title}
              </h2>
            </div>
            <Link
              to="/about"
              className="text-amber-400 text-sm font-semibold uppercase tracking-wider hover:text-amber-300 transition-colors flex items-center gap-2"
            >
              {lang === "am" ? "ሁሉንም ይመልከቱ" : "View All"}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <Gallery images={t.gallery.images} lang={lang} />
        </div>
      </section>

      <section
        id="courses"
        className="py-24 md:py-32 px-6 md:px-20 bg-[#0a0a0a]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
              {t.courses.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {t.courses.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.courses.items.map((course, i) => (
              <CourseCard key={i} course={course} index={i} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/logo.png')` }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
              {lang === "am" ? "ምስክርነት" : "Testimonials"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {lang === "am" ? "ተማሪዎቻችን ምን ይላሉ?" : "What Our Students Say"}
            </h2>
          </motion.div>
          <TestimonialSlider testimonials={t.testimonials} lang={lang} />
        </div>
      </section>

      <section
        id="location"
        className="py-24 md:py-32 px-6 md:px-20 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 text-[15vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
          LOC
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-amber-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
              {t.locations.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {t.locations.title}
            </h2>
          </motion.div>

          <div className="space-y-2">
            {t.locations.list.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.02] hover:px-6 transition-all duration-500 cursor-default rounded-lg"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-2xl text-amber-500/50 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-amber-500" size={24} />
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">
                      {loc.city}
                    </h3>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm md:text-base">
                    {loc.address}
                  </p>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Phone size={16} />
                    <span className="text-sm">{loc.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-[#111111]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/abel23.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-800/90" />
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {lang === "am" ? "አሁኑኑ ይመዝገቡ!" : "Enroll Today!"}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {lang === "am"
                ? "ከእኛ ጋር ተቀላቀሉና የባህላዊ ሙዚቃ ጥበብን ይማሩ። ለተጨማሪ መረጃ ያግኙን።"
                : "Join us and learn the art of traditional music. Contact us for more information."}
            </p>
            <a
              href="tel:0912674600"
              className="inline-flex items-center gap-3 bg-white text-amber-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>091 267 4600</span>
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
