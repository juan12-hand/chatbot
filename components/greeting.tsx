import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="mx-auto mt-4 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-16 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="font-semibold text-2xl md:text-3xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.4 }}
      >
        ¡Hola, mi amor! 💕
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 text-xl text-pink-400 md:text-2xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.55 }}
      >
        Soy Majo, tu asistente personal 🌸
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 text-sm text-muted-foreground"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.7 }}
      >
        Creada con amor por Juan, especialmente para ti ✨
      </motion.div>
    </div>
  );
};
