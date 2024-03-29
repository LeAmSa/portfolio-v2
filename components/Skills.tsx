import { Skill } from "../typings";
import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen justify-center xl:space-x-0 mx-auto items-center z-0">
      <SectionTitle title="Skills" />

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
