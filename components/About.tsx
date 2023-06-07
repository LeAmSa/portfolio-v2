import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  pageInfo: PageInfo;
}

function About({ pageInfo }: AboutProps) {
  const birth = new Date(1994, 3, 12);
  const diff = Date.now() - birth.getTime();
  const ageDate = new Date(diff);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <div className="h-screen flex gap-0 relative flex-col text-left lg:text-left lg:flex-row max-w-7xl px-5 lg:px-10 justify-center mx-auto items-center z-0 md:gap-8">
      <SectionTitle title="Sobre" />

      <motion.div
        initial={{
          x: -70,
          opacity: 0,
        }}
        transition={{
          delay: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mt-20 mb-5 md:mb-0 flex-shrink-0 self-start md:self-center"
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Imagem de frente"
          width={320}
          height={320}
          className="w-24 h-24 rounded-full object-cover md:w-64 md:h-64 xl:w-80 xl:h-80"
        />
      </motion.div>

      <div className="md:mt-20 space-y-5 md:space-y-10">
        <motion.h4
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-semibold"
        >
          Um pequeno{" "}
          <strong className="underline decoration-red-600 bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-red-300">
            background
          </strong>
        </motion.h4>
        <motion.p
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          viewport={{ once: true }}
          className="font-light text-base md:text-lg max-h-[300px] pr-4"
        >
          Olá, seja muito bem vindo (a) ao meu site! Me chamo Leandro, tenho{" "}
          {years} anos e sou bacharel em{" "}
          <strong className="underline decoration-red-600 font-semibold">
            Ciência da Computação
          </strong>{" "}
          pela Universidade Tecnológica Federal do Paraná [2015-2020].
          Apaixonado por tecnologia, design e pelo poder que o visual pode gerar
          por meio de produtos e serviços, venho me dedicando aos estudos da
          area de desenvolvimento Front-end e criei este site pessoal como forma
          de apresentar tudo aquilo em que venho trabalhando.
        </motion.p>
      </div>

      <div className="absolute top-[40%] right-4 w-full h-[300px] rounded-2xl bg-red-500/20 blur-3xl -z-10 skew-y-12" />
    </div>
  );
}

export default About;
