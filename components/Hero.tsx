import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  UserCircleIcon,
  BoltIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

interface HeroProps {
  pageInfo: PageInfo;
}

function Hero({ pageInfo }: HeroProps) {
  const [text, count] = useTypewriter({
    words: ["Web />", "React />", "React Native />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />

      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Imagem de Perfil"
        width={150}
        height={150}
        className="relative rounded-full mx-auto object-cover"
      />

      <div className="z-10">
        <h2 className="text-sm text-gray-500 uppercase tracking-[15px]">
          {pageInfo?.role}
        </h2>

        <h1 className="text-3xl md:text-6xl font-semibold px-5 md:px-10">
          <span className="mr-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
            &lt;Dev {text}
          </span>
          <Cursor cursorColor="#dc2626" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">
              <UserCircleIcon className="w-6 h-6 md:hidden" />
              <span className="hidden md:block">Sobre</span>
            </button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">
              <BoltIcon className="w-6 h-6 md:hidden" />
              <span className="hidden md:block">Skills</span>
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">
              <RectangleStackIcon className="w-6 h-6 md:hidden" />
              <span className="hidden md:block">Projetos</span>
            </button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">
              <EnvelopeIcon className="w-6 h-6 md:hidden" />
              <span className="hidden md:block">Contato</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
