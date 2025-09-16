"use client";

import { motion } from "framer-motion";

const BGAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
      />
    </div>
  );
};

export default BGAnimation;
