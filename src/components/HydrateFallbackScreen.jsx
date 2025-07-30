import { motion } from "framer-motion";

export default function HydrateFallbackScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed inset-0 h-screen w-screen flex min-h-0 flex-col justify-center items-center bg-black"
    >
      <p className="text-white">Loading ...</p>
    </motion.div>
  );
}
