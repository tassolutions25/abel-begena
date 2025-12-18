"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

const Gallery = ({ images, lang }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className={`group relative overflow-hidden cursor-pointer rounded-lg ${
              i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            onClick={() => openLightbox(i)}
          >
            <div className="aspect-square w-full h-full overflow-hidden">
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.title || `Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500" />
                  <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">
                    {img.category || (lang === "am" ? "ትዕይንት" : "View")}
                  </span>
                </div>
                <h4 className="font-serif text-white text-xl md:text-2xl font-semibold">{img.title || ""}</h4>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
              <Maximize2 size={16} className="text-white" />
            </div>

            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="glass-strong px-3 py-1.5 rounded-full">
                <span className="text-white text-xs font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-8 right-8 glass w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all z-50"
            >
              <X size={24} />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-8 md:left-12 glass w-14 h-14 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-50"
            >
              <ChevronLeft size={28} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-8 md:right-12 glass w-14 h-14 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-50"
            >
              <ChevronRight size={28} />
            </motion.button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              src={images[selectedIndex].src}
              alt=""
              className="max-w-[85vw] max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full"
            >
              <span className="text-white font-mono text-sm font-semibold">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
