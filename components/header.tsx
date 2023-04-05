import Link from "next/link";
import styles from "@/styles/header.module.css";

import { Home } from "react-feather";
import { HomeIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <Home />
      </Link>
      <Link href={"/contactme"}>Contact Me</Link>
    </header>
  );
};

export default Header;
