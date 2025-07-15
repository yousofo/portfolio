"use client";
import { motion } from "framer-motion"

export default function WorkSlide() {
  return (
    <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      Click Me
    </motion.div>
    </>
  )
}
