import Link from "next/link";
import styles from "@/styles/header.module.css";

import { Home } from "react-feather";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <Home className={styles.homeicon} />
      </Link>
      <Link href={"/contactme"}>Contact Me</Link>
    </header>
  );
};

export default Header;
