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
          Olá, seja muito bem vindo (a) ao meu site! Me chamo Leandro, tenho 28
          anos e sou bacharel em{" "}
          <span className="underline decoration-red-600">
            Ciência da Computação
          </span>{" "}
          pela Universidade Tecnológica Federal do Paraná [2015-2020].
          Apaixonado por tecnologia, design e pelo poder que o visual pode gerar
          por meio de produtos e serviços, venho me dedicando aos estudos da
          area Front-end de desenvolvimento e criei este site pessoal como forma
          de apresentar tudo aquilo em que venho trabalhando para conseguir
          minha primeira oportunidade. <br /> <br /> Minha paixão por design
          surgiu antes mesmo da graduação. Em 2014, trabalhei por um período
          como{" "}
          <span className="underline decoration-red-600">designer gráfico</span>{" "}
          de anúncios de diversos produtos e era extremamente gratificante
          quando conseguia desenvolver algo que agradasse aos olhos das outras
          pessoas. Hoje, essa paixão é acentuada quando vejo sites ou
          aplicativos que possuem um aspecto visual inovador e capaz de
          conquistar as pessoas pelo visual. Com isso, ser capaz de
          desenvolvê-los é o que me inspira. <br /> <br /> Venho me dedicando ao
          estudo do ambiente de desenvolvimento web com{" "}
          <span className="underline decoration-red-600 font-semibold">
            HTML, CSS, JavaScript e React
          </span>{" "}
          como framework para agregar essas tecnologias. Me considero um
          desenvolvedor ágil, que busca sempre entregar além do esperado e
          principalmente "self-learning", pois tenho uma enorme capacidade de
          aprender coisas novas por conta própria, afinal, a maior virtude de um
          cientista é sua capacidade de pesquisa. Fique a vontade para conhecer
          um pouco mais das minhas capacidades explorando as seções abaixo e
          entre em contato se quiser me conhecer ainda melhor. Obrigado!
        </motion.p>
      </div>

      <div className="absolute top-[40%] right-4 w-full h-[300px] rounded-2xl bg-red-500/20 blur-3xl -z-10 skew-y-12" />
    </div>
  );
}

export default About;
