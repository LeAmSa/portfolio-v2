import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  pageInfo: PageInfo;
}

function About({ pageInfo }: AboutProps) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-center mx-auto items-center z-0">
      <SectionTitle>Sobre</SectionTitle>

      <motion.img
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="Imagem de frente"
        className="mt-20 mb-5 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 xl:w-80 xl:h-80"
      />

      <div className="md:mt-20 space-y-5 md:space-y-10 px-0 md:px-10">
        <motion.h4
          initial={{
            y: -120,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-xl md:text-4xl font-semibold"
        >
          Um <span className="underline decoration-red-600">pequeno</span>{" "}
          background
        </motion.h4>
        <motion.p
          initial={{
            y: 120,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="text-sm md:text-lg overflow-y-scroll max-h-[200px] pr-4 scrollbar-thin scrollbar-track-gray-900/50 scrollbar-track-rounded-lg scrollbar-thumb-red-600/80 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scrollbar-thumb-rounded-lg"
        >
          {pageInfo?.backgroundInformation}
        </motion.p>
      </div>

      <div className="absolute top-[40%] right-4 w-full h-[300px] rounded-2xl bg-red-500/20 blur-3xl -z-10 skew-y-12" />
    </div>
  );
}

export default About;
