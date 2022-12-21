import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        rotate: [0, 0, -180, -180, 0],
      }}
    >
      <Link href="#hero">
        <Image
          src="https://github.com/leamsa.png"
          alt=""
          width={40}
          height={40}
          className="opacity-30 filter grayscale hover:grayscale-0 hover:opacity-100 rounded-full object-cover"
        />
      </Link>
    </motion.div>
  );
}

export default Footer;
