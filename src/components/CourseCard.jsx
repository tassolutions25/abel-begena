import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CourseCard = ({ course, index, lang }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#1a1a1a] border border-white/5 overflow-hidden hover:border-amber-500/30 transition-all duration-500"
    >
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={course.img}
          alt={course.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        <div className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
          {course.category}
        </div>
        <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
          {course.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {course.description ||
            (lang === "am" ? "ባህላዊ የሙዚቃ ትምህርት" : "Traditional music education")}
        </p>

        {course.duration && (
          <div className="flex items-center gap-6 mb-6 text-sm">
            <div>
              <span className="text-gray-500 block">
                {lang === "am" ? "ጊዜ" : "Duration"}
              </span>
              <span className="text-white font-semibold">
                {course.duration}
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-gray-500 block">
                {lang === "am" ? "ደረጃ" : "Level"}
              </span>
              <span className="text-white font-semibold">
                {course.level || (lang === "am" ? "ሁሉም" : "All")}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {course.price ? (
            <div className="text-amber-400 text-2xl font-bold">
              {course.price}
            </div>
          ) : (
            <div className="text-gray-500 text-sm uppercase tracking-wider">
              {lang === "am" ? "ለመመዝገብ ያነጋግሩን" : "Contact for pricing"}
            </div>
          )}
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
