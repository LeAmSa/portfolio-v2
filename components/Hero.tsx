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
    <div className="relative h-screen flex space-y-8 items-center justify-center text-center overflow-hidden max-w-7xl mx-auto z-[11] lg:translate-x-16">
      <div className="z-10">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-6xl lg:text-5xl font-bold bg-clip-text lg:text-left text-transparent bg-gradient-to-t from-slate-200"
        >
          {pageInfo?.name}
        </motion.h1>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-xs md:text-sm text-slate-500 lg:text-left uppercase tracking-[15px]"
        >
          {pageInfo?.role}
        </motion.h2>

        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-6 md:mt-12 lg:mt-6 text-xl md:text-4xl lg:text-3xl lg:text-left font-semibold"
        >
          <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
            &lt;Dev {text}
          </span>
          <Cursor cursorColor="#dc2626" />
        </motion.h3>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="text-slate-200 text-center lg:text-start text-base md:text-xl lg:text-lg mt-6 md:mt-12 lg:mt-6 px-12 lg:px-0"
        >
          Conheça a jornada de um explorador do universo front-end e amante de
          design.
        </motion.p>

        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:-translate-x-0 lg:pt-20 flex justify-center lg:justify-start items-center gap-4">
          {socials?.map((social, i) => (
            <motion.div
              initial={{ y: -30 - i * 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3 + i / 10 }}
            >
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
                className="hover:scale-90 transition-transform object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Perfil"
          width={600}
          height={600}
          className="opacity-10 lg:opacity-50 lg:static absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:translate-x-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
