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
    <header className="sticky backdrop-blur-lg top-0 py-4 md:py-6 flex items-center justify-center md:justify-between w-full px-20 z-20">
      <Link href="#hero">
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
            duration: 0.5,
          }}
          className="md:hidden"
        >
          <HomeIcon className="w-6 h-6 mr-6 hover:text-slate-400 transition-colors" />
        </motion.div>
        <motion.p
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="hidden md:block font-semibold text-slate-200 text-xl uppercase tracking-widest"
        >
          leamsa
        </motion.p>
      </Link>

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
          duration: 0.5,
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
