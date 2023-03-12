import styles from "@/styles/whoami.module.css";
import Link from "next/link";

export const Whoami = () => {
  return (
    <div className={styles.container}>
      <h1>Whoami</h1>
      <p>
        I am a Software Engineer for Workday, Inc specializing in front end
        development. I help create simple yet elegant web applications for
        users. Once the workday is over I enjoy spending time outside or at a
        recovery center sitting in a cold tub. Looking to work together?
        <Link href={"/contactme"}> Contact me here. </Link>
      </p>
    </div>
  );
};

//  I love my dog and two cats.
