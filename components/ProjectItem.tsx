import React, { useState } from 'react'
import { urlFor } from "../sanity";
import { Project } from '../typings'
import Image from 'next/image';
import {
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon,
    QrCodeIcon,
    XMarkIcon,
    InformationCircleIcon
  } from "@heroicons/react/24/outline";
import Link from 'next/link';
import * as Popover from "@radix-ui/react-popover";


interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({project}: ProjectItemProps) {
  const [isSummaryVisible, setIsSummaryVisible] = useState<Boolean>(false)


  return (
    <div key={project?._id} className="relative flex flex-col justify-around w-full md:max-w-[400px] flex-shrink-0 p-4 rounded-lg bg-slate-700 shadow-xl before:absolute before:-inset-x-[2px] before:-bottom-[2px] before:top-0 before:bg-gradient-to-r before:from-transparent before:from-30% before:via-red-600/70 before:via-50% before:to-transparent before:to-70% before:rounded-lg before:-z-10">
          
            <div title='Descrição' onClick={() => setIsSummaryVisible(!isSummaryVisible)} className="cursor-pointer absolute grid place-items-center -top-[4%] right-4 w-9 h-9 bg-gray-500 hover:bg-gray-600 text-white text-xl rounded-full z-[30] transition-colors">{isSummaryVisible ? <XMarkIcon height={18} /> : <InformationCircleIcon height={28} />}</div>
            
            <Image
              src={urlFor(project?.image).url()}
              alt="Imagem Mockup"
              width={800}
              height={382}
              placeholder="blur"
              blurDataURL="URL"
              className="w-full h-auto object-cover mb-2"
            />

            <div className="grid place-items-center gap-1 mb-6">
              <h4 className="text-3xl font-semibold text-center underline decoration-red-500/70 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-300">
                {project?.title}
              </h4>
              <div className="flex gap-4 justify-center items-center">
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

            <p className={`${isSummaryVisible ? "visible" : "hidden"} absolute overflow-y-scroll md:overflow-y-auto inset-0 text-white font-light w-full h-full p-6 bg-black/90 rounded-lg`}>{project?.summary}</p>

            <menu className="flex justify-around items-center">
              {project.linkToBuild && (
                <li>
                  <Link
                    href={project?.linkToBuild}
                    target="_blank"
                    title="Acesse a página do projeto"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </Link>
                </li>
              )}

              {project.qrCodeImage && (
                <li>
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
                </li>
              )}

              {project.linkToCode && (
                <li>
                  <Link
                    href={project?.linkToCode}
                    target="_blank"
                    title="Acesse o repositório no GitHub"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <CodeBracketIcon className="w-6 h-6" />
                  </Link>
                </li>
              )}
            </menu>
          </div>
  )
}
