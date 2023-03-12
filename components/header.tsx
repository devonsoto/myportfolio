import Link from "next/link";
import styles from "@/styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <div>Home Icon</div>
      </Link>
      <Link href={"/contactme"}>
        <div>Contact Me</div>
      </Link>
    </header>
  );
};

export default Header;
