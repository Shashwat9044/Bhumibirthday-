
import { motion } from "framer-motion";

export function Gallery({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
      {images.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Memory ${idx + 1}`}
          className="rounded-2xl shadow-md border-4 border-pink-200 hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
        />
      ))}
    </div>
  );
}
