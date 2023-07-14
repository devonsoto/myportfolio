import  Header  from "@/app/header";
import { Footer } from "@/app/footer";
import styles from "@/styles/contactMe.module.css";

export const ContactMe = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Hello ! Let&apos;s work together.</h1>
        <h2>
          You can reach me at{" "}
          <span className={styles.email}>online.devon@gmail.com</span>
        </h2>
        {/* <h2>
          give me a text/call at{" "}
          <span className={styles.phone}>720-480-0272</span>
        </h2> */}
        {/* <p>online.devon@gmail.com</p> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
