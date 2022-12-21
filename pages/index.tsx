import type { GetStaticProps } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";

import { PageInfo, Project, Social, Skill } from "../typings";

import { Jost } from "@next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
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
      className={`bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-red-600/80 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scroll-smooth ${jost.variable} font-sans`}
    >
      <Head>
        <title>LeAmSa | Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
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

      <footer className="sticky w-10 h-10 bottom-3 left-full hidden md:block -translate-x-6">
        <Footer />
      </footer>
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
