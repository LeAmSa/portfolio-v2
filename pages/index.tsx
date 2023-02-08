import type { GetStaticProps } from "next";
import Head from "next/head";
import { Jost } from "@next/font/google";

import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  ContactMe,
} from "../components";

import {
  fetchPageInfo,
  fetchSocials,
  fetchSkills,
  fetchProjects,
} from "../utils";

import { PageInfo, Project, Social, Skill } from "../typings";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  return (
    <div
      className={`relative bg-[#16202E] text-slate-100 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#242424]/60 scrollbar-thumb-red-500/50 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scroll-smooth ${jost.variable} font-sans`}
    >
      <Head>
        <title>LeAmSa | Front-end Developer</title>
        <meta
          name="description"
          content="Conheça a jornada de um explorador do universo front-end e apaixonado por design."
          key="desc"
        />
        <link rel="canonical" href="https://leamsa-portfolio.vercel.app" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} socials={socials} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] bg-hero rounded-lg blur-[100px] opacity-30 skew-y-[20deg] z-10" />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
    },

    revalidate: 60 * 60,
  };
};
