import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import SectionTitle from "./SectionTitle";

interface AboutProps {
  pageInfo: PageInfo;
}

function About({ pageInfo }: AboutProps) {
  const birth = new Date(1994, 4, 12);
  const diff = Date.now() - birth.getTime();
  const ageDate = new Date(diff);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <div className="h-screen flex relative flex-col text-center lg:text-left lg:flex-row max-w-7xl px-5 lg:px-10 justify-center mx-auto items-center z-0">
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
        className="mt-20 mb-5 md:mb-0 flex-shrink-0"
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Imagem de frente"
          width={320}
          height={320}
          className="w-36 h-36 rounded-lg object-cover md:w-64 md:h-64 xl:w-80 xl:h-80"
        />
      </motion.div>

      <div className="md:mt-20 space-y-5 md:space-y-10 px-0 md:px-10">
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
          className="text-xl md:text-4xl font-semibold"
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
          className="text-sm md:text-lg overflow-y-scroll max-h-[200px] pr-4 scrollbar-thin scrollbar-track-gray-900/50 scrollbar-track-rounded-lg scrollbar-thumb-red-500/80 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scrollbar-thumb-rounded-lg"
        >
          Ol??, seja muito bem vindo (a) ao meu site! Me chamo Leandro, tenho{" "}
          {years} anos e sou bacharel em{" "}
          <strong className="underline decoration-red-600 font-semibold">
            Ci??ncia da Computa????o
          </strong>{" "}
          pela Universidade Tecnol??gica Federal do Paran?? [2015-2020].
          Apaixonado por tecnologia, design e pelo poder que o visual pode gerar
          por meio de produtos e servi??os, venho me dedicando aos estudos da
          area Front-end de desenvolvimento e criei este site pessoal como forma
          de apresentar tudo aquilo em que venho trabalhando. <br /> <br />{" "}
          Minha paix??o por design surgiu antes mesmo da gradua????o. Em 2014,
          trabalhei por um per??odo como{" "}
          <strong className="underline decoration-red-600 font-semibold">
            designer gr??fico
          </strong>{" "}
          de an??ncios de diversos produtos e era extremamente gratificante
          quando conseguia desenvolver algo que agradasse aos olhos das outras
          pessoas. Hoje, essa paix??o ?? acentuada quando vejo sites ou
          aplicativos que possuem um aspecto visual inovador e capaz de
          conquistar as pessoas pelo visual. Com isso, ser capaz de
          desenvolv??-los ?? o que me inspira. <br /> <br /> Venho me dedicando ao
          estudo do ambiente de desenvolvimento web com{" "}
          <strong className="underline decoration-red-600 font-semibold">
            HTML, CSS, JavaScript e React
          </strong>{" "}
          como framework para agregar essas tecnologias. Me considero um
          desenvolvedor ??gil, que busca sempre entregar al??m do esperado e
          principalmente "self-learning", pois tenho uma enorme capacidade de
          aprender coisas novas por conta pr??pria, afinal, a maior virtude de um
          cientista ?? sua capacidade de pesquisa. Fique a vontade para conhecer
          um pouco mais das minhas capacidades explorando as se????es abaixo e
          entre em contato se quiser me conhecer ainda melhor.{" "}
          <strong className="font-semibold underline decoration-red-600">
            Obrigado!
          </strong>
        </motion.p>
      </div>

      <div className="absolute top-[40%] right-4 w-full h-[300px] rounded-2xl bg-red-500/20 blur-3xl -z-10 skew-y-12" />
    </div>
  );
}

export default About;
