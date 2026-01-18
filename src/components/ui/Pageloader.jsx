import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-amber-900/5 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-amber-700 border-t-transparent animate-spin" />
        <p className="text-black font-semibold text-2xl text-shadow-2xs">Loading page...</p>
      </div>
    </motion.div>
  );
}
