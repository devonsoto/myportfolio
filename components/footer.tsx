import Link from "next/link";
import styles from "@/styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <h3>Thanks for visiting</h3>
      <div className={styles.linksSection}>
        <div className={styles.first}>
          <a
            target={"_blank"}
            href={"https://www.linkedin.com/in/devonsoto/"}
            rel="noreferrer noopener"
          >
            Linkedin
          </a>
          <a
            target={"_blank"}
            href={"https://github.com/devonsoto77"}
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
        <div className={styles.first}>
          <Link href={"/"}>Home</Link>
          <Link href={"contactme"}>Contact Me </Link>
        </div>
      </div>
      <div className={styles.copyright}>© 2023 Devon Soto</div>
    </div>
  );
};

export default Footer;
