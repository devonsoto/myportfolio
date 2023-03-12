import Link from "next/link";
import styles from "@/styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <h3>Thanks for visiting</h3>
      <div className={styles.linksSection}>
        <div className={styles.first}>
          <Link href={"www.linkedn.com"}>Linkden </Link>
          <Link href={"www.github.com"}>Github </Link>
        </div>
        <div className={styles.first}>
          <Link href={"/"}>Home</Link>
          <Link href={"contactme"}>Contact Me </Link>
        </div>
      </div>
      <div className={styles.copyright}>2023 Devon Soto</div>
    </div>
  );
};

export default Footer;
