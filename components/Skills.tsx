import { Skill } from "../typings";
import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-x-0 mx-auto items-center z-0">
      <SectionTitle title="Skills" />

      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm"
      >
        <span className="px-2 hidden lg:inline">
          Posicione o mouse sobre uma{" "}
          <span className="underline decoration-red-500/70">skill</span> para
          ver a proficiência
        </span>
        <span className="px-2 lg:hidden">
          Selecione uma{" "}
          <span className="underline decoration-red-500/70">skill</span> para
          ver a proficiência
        </span>
      </motion.h3>

      <div className="mt-32 grid grid-cols-4 gap-2 md:gap-5">
        {skills?.map((skill) => (
          <SkillItem key={skill._id} skill={skill} />
        ))}
      </div>

      <div className="absolute top-[40%] left-1/2 w-96 -translate-x-1/2 h-[300px] rounded-2xl bg-red-500/20 blur-[80px] -z-10 skew-y-[35deg]" />
    </div>
  );
}

export default Skills;
