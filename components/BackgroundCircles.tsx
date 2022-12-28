import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333]/50 rounded-full w-[250px] h-[250px] md:h-[300px] md:w-[300px] mt-52" />
      <div className="absolute border border-[#333333]/60 rounded-full w-[400px] h-[400px] md:h-[500px] md:w-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#333333]/80 w-[500px] h-[500px] md:h-[650px] md:w-[650px] mt-52" />
      <div className="absolute rounded-full border-4 drop-shadow-[0px_0px_10px_rgba(239,68,68,0.9)] border-red-600 opacity-20 w-[650px] h-[650px] md:h-[800px] md:w-[800px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full w-[800px] h-[800px] md:h-[950px] md:w-[950px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
