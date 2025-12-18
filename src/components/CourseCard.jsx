"use client";
import { motion } from "framer-motion";
import { Clock, Award, ArrowUpRight } from "lucide-react";

const CourseCard = ({ course, index, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-[#0f0f0f] border border-white/5 overflow-hidden hover:border-amber-500/40 hover:shadow-glow transition-all duration-700 rounded-lg hover-lift"
    >
      <div className="relative h-72 md:h-80 overflow-hidden">
        <motion.img
          src={course.img}
          alt={course.name}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
          whileHover={{ scale: 1.05 }}
        />

        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />

        <div className="absolute top-5 left-5 glass-strong px-4 py-2 rounded-full">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
            {course.category}
          </span>
        </div>

        <div className="absolute top-5 right-5">
          <span className="font-serif text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-700">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-8">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
          {course.name}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed mb-6 font-light line-clamp-2">
          {course.description ||
            (lang === "am" ? "ባህላዊ የሙዚቃ ትምህርት" : "Traditional music education")}
        </p>

        {course.duration && (
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-amber-500" />
              <div>
                <span className="text-gray-500 text-xs block mb-1 uppercase tracking-wider">
                  {lang === "am" ? "ጊዜ" : "Duration"}
                </span>
                <span className="text-white font-semibold text-sm">
                  {course.duration}
                </span>
              </div>
            </div>

            <div className="w-px h-10 bg-white/10" />

            <div className="flex items-center gap-2">
              <Award size={16} className="text-amber-500" />
              <div>
                <span className="text-gray-500 text-xs block mb-1 uppercase tracking-wider">
                  {lang === "am" ? "ደረጃ" : "Level"}
                </span>
                <span className="text-white font-semibold text-sm">
                  {course.level || (lang === "am" ? "ሁሉም" : "All")}
                </span>
              </div>
            </div>
          </div>
        )}

        <button className="group/btn w-full flex items-center justify-between px-6 py-4 glass rounded-full hover:bg-amber-500/10 hover:border-amber-500/40 hover:shadow-glow-sm transition-all duration-500">
          <span className="text-white text-sm font-semibold uppercase tracking-wider">
            {lang === "am" ? "ይመዝገቡ" : "Learn More"}
          </span>
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover/btn:bg-amber-500 transition-all duration-500">
            <ArrowUpRight
              size={18}
              className="text-amber-400 group-hover/btn:text-black transition-colors"
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
