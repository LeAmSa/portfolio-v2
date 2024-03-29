import Image from "next/image";

import { motion } from "framer-motion";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { PageInfo, Social } from "../typings";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

interface HeroProps {
  pageInfo: PageInfo;
  socials: Social[];
}

function Hero({ pageInfo, socials }: HeroProps) {
  const [text] = useTypewriter({
    words: ["Web />", "React />", "React Native />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen grid place-items-center text-center overflow-hidden max-w-7xl mx-auto z-[11]">
      <div className="z-10 translate-y-28">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl whitespace-nowrap md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-200"
        >
          {pageInfo?.name}
        </motion.h1>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs md:text-lg text-slate-500 uppercase tracking-[15px]"
        >
          {pageInfo?.role}
        </motion.h2>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-300 text-center font-semibold text-base md:text-xl lg:text-2xl mt-6 md:mt-12 lg:mt-8 px-12 lg:px-0"
        >
          Conheça a jornada de um explorador do universo{" "}
          <br className="hidden md:inline-block" /> front-end e apaixonado por
          design.
        </motion.p>

        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-6 md:mt-12 text-xl md:text-4xl lg:text-3xl font-semibold"
        >
          <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
            &lt;Dev {text}
          </span>
          <Cursor cursorColor="#dc2626" />
        </motion.h3>
      </div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:-translate-x-0 lg:pt-20 flex justify-center items-center gap-4 z-10">
        {socials?.map((social, i) => (
          <motion.div
            key={social._id}
            initial={{ y: -30 - i * 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 + i / 10 }}
          >
            <SocialIcon
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
              className="hover:scale-90 transition-transform object-cover"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Perfil"
          width={600}
          height={600}
          priority
          className="opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
