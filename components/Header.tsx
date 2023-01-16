import { motion } from "framer-motion";
import Link from "next/link";
import {
  HomeIcon,
  UserCircleIcon,
  BoltIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import ToolTip from "./ToolTip";

function Header() {
  return (
    <header className="sticky backdrop-blur-lg top-0 py-2 md:py-6 flex items-center justify-center md:justify-between w-full px-20 z-20">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="flex flex-row items-center"
      >
        <Link href="#hero">
          <HomeIcon className="w-6 h-6 mr-6 md:hidden hover:text-slate-400 transition-colors" />
          <span className="hidden md:block font-semibold text-slate-200 text-xl uppercase tracking-widest">
            leamsa
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.0,
        }}
        className="flex items-center gap-6"
      >
        <Link href="#about" className="relative group">
          <UserCircleIcon className="w-6 h-6 hover:text-slate-400 transition-colors" />
          <ToolTip title="Sobre" />
        </Link>
        <Link href="#skills" className="relative group">
          <BoltIcon className="w-6 h-6 hover:text-slate-400 transition-colors" />
          <ToolTip title="Skills" />
        </Link>
        <Link href="#projects" className="relative group">
          <RectangleStackIcon className="w-6 h-6 hover:text-slate-400 transition-colors" />
          <ToolTip title="Projetos" />
        </Link>
        <Link href="#contact" className="relative group">
          <EnvelopeIcon className="w-6 h-6 hover:text-slate-400 transition-colors" />
          <ToolTip title="Contato" />
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
