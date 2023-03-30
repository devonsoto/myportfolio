import styles from "@/styles/whoami.module.css";
import Link from "next/link";

export const Whoami = () => {
  return (
    <div className={styles.container}>
      <h1>Whoami</h1>
      <p>
        Hello! I am a Software Engineer for Workday, Inc specializing in front
        end development. The frameworks that I use most often are React and
        NextJs. When I create web applications I focus on user experience and
        ease of use. I also enjoy learning new technologies such as aws and
        chatgpt. Once the workday is over I enjoy spending time outside or at a
        recovery center sitting in a cold tub. Looking to work together? 👉
        <Link href={"/contactme"}> Contact me here. </Link>
      </p>
    </div>
  );
};
