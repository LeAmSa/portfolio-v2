import Image from "next/image";

import { Skill } from "../typings";
import { urlFor } from "../sanity";

import { LazyMotion, m, domAnimation } from "framer-motion";

interface SkillItemProps {
  skill: Skill;
}

function Skill({ skill }: SkillItemProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: [0, 0.5, 0.8, 1],
          scale: [0.3, 0.6, 1.1, 1],
        }}
        transition={{
          delay: 0.7 + skill?.progress / 100,
        }}
        viewport={{ once: true }}
        title={skill?.title}
        className="group relative flex"
      >
        <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-500">
          <Image
            src={urlFor(skill?.image).url()}
            alt=""
            width="30"
            height="30"
            className="md:w-10 md:h-10 object-cover"
          />
        </div>
      </m.div>
    </LazyMotion>
  );
}

export default Skill;
