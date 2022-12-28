import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";

interface HeaderProps {
  socials: Social[];
}

function Header({ socials }: HeaderProps) {
  return (
    <header className="sticky backdrop-blur-lg top-0 py-1 md:py-5 flex items-start justify-center md:justify-between w-full px-20 z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-90 transition-transform"
          />
        ))}
      </motion.div>

      <Link href="#contact" legacyBehavior>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.0,
          }}
          className="text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />

          <p className="uppercase hidden md:inline-flex">Entre em contato</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
