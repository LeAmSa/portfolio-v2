import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  QrCodeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import SectionTitle from "./SectionTitle";

import * as Popover from "@radix-ui/react-popover";

import { Project } from "../typings";
import { urlFor } from "../sanity";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="h-screen px-4 md:px-24 relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <SectionTitle title="Projetos" />

      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm"
      >
        Ordenados do mais{" "}
        <span className="underline decoration-red-500/70">recente</span> para o
        mais antigo
      </motion.h3>

      <div className="mt-24 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-track-rounded-lg scrollbar-thumb-red-600/80 hover:scrollbar-thumb-red-800/80 active:scrollbar-thumb-red-700/80 scrollbar-thumb-rounded-lg">
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-4 pb-4 md:pb-6 md:p-10"
          >
            <Image
              src={urlFor(project?.image).url()}
              alt="Imagem Mockup"
              width={800}
              height={382}
              placeholder="blur"
              blurDataURL="URL"
              className="max-w-[150px] md:max-w-[250px] h-auto object-cover"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h4 className="text-2xl md:text-3xl font-semibold text-center">
                  <span className="underline decoration-red-500/70 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-300">
                    {project?.title}
                  </span>
                </h4>

                <div className="flex gap-2 items-center justify-between">
                  {project?.technologies.map((tech) => (
                    <Image
                      key={tech._id}
                      src={urlFor(tech.image).url()}
                      alt=""
                      width={18}
                      height={18}
                      title={tech.title}
                      className="md:w-6 md:h-6"
                    />
                  ))}
                </div>
              </div>

              <p className="px-4 text-sm md:text-lg text-center md:text-left">
                {project?.summary}
              </p>

              <div className="flex justify-center items-center gap-20 md:gap-24">
                {project.linkToBuild && (
                  <Link
                    href={project?.linkToBuild}
                    target="_blank"
                    title="Acesse a página do projeto"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </Link>
                )}

                {project.qrCodeImage && (
                  <Popover.Root>
                    <Popover.Trigger
                      asChild
                      className="hover:text-gray-400 transition-colors"
                    >
                      <QrCodeIcon
                        className="w-6 h-6 cursor-pointer"
                        title="Escaneie para acessar no mobile"
                      />
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content className="PopoverContent relative w-[220px] h-[220px] bg-white flex flex-col items-center justify-center rounded-xl shadow-lg">
                        <Popover.Close className="absolute top-2 right-2">
                          <XMarkIcon className="w-4 h-4 cursor-pointer" />
                        </Popover.Close>
                        <Image
                          src={urlFor(project?.qrCodeImage).url()}
                          alt="QrCode"
                          width={200}
                          height={200}
                          className="my-5"
                        />
                        <Popover.Arrow width={15} height={10} fill="white" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                )}

                {project.linkToCode && (
                  <Link
                    href={project?.linkToCode}
                    target="_blank"
                    title="Acesse o repositório no GitHub"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <CodeBracketIcon className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] blur-sm bg-red-700/20 left-0 h-[400px] -skew-y-12" />
    </div>
  );
}

export default Projects;
