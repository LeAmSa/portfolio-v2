import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [2, 2, 1, 2, 1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border-2 border-red-600 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
