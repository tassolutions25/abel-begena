import React from "react";
import { motion } from "framer-motion";

const SkillBars = ({ skills }) => {
  return (
    <div className="space-y-8">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="group"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-white font-semibold text-lg uppercase tracking-wider group-hover:text-amber-400 transition-colors">
              {skill.name}
            </h4>
            <span className="text-amber-500 font-bold text-xl">
              {skill.percentage}%
            </span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBars;
