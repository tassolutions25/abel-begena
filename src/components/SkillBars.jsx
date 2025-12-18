"use client"
import { motion } from "framer-motion"

const SkillBars = ({ skills }) => {
  return (
    <div className="space-y-10">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.8 }}
          className="group"
        >
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="text-white font-semibold text-xl md:text-2xl tracking-wide group-hover:text-amber-400 transition-colors duration-300">
                {skill.name}
              </h4>
              <p className="text-gray-500 text-sm mt-1 font-light">{skill.description}</p>
            </div>
            <span className="font-serif text-amber-500 font-bold text-3xl md:text-4xl tabular-nums">
              {skill.percentage}
              <span className="text-xl text-amber-500/60">%</span>
            </span>
          </div>

          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: i * 0.12,
                ease: [0.6, 0.01, 0.05, 0.95],
              }}
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-full relative shadow-glow"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-sm opacity-70" />
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillBars
