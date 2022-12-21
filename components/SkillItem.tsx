import Image from "next/image";

import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

interface SkillItemProps {
  skill: Skill;
}

function Skill({ skill }: SkillItemProps) {
  return (
    <div title={skill.title} className="group relative flex cursor-pointer">
      <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-500">
        <Image
          src={urlFor(skill?.image).url()}
          alt=""
          width="30"
          height="30"
          className="md:w-10 md:h-10 object-cover"
        />
      </div>

      <div className="absolute opacity-0 group-hover:opacity-80 hover:backdrop-blur-3xl h-16 w-16 md:w-20 md:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text- md:text-xl font-bold text-white opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
