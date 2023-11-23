import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { Timeline } from "@/app/timeline/timeline";
import { Footer } from "@/app/footer";
import Header from "@/app/header";
import { Whoami } from "@/app/whoami/whoami";
import { AnimatedText } from "@/components/animatedText";
import { Projects } from "@/app/projects/projects";
import Contact from "./contact";
import Technologies from "./technology";
import VerticalIndicator from "@/components/verticalNavigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devon Soto</title>
        <meta name="description" content="CEO & CO-Founder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: Change this in the future when we have something */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <main className={styles.main}> */}
      <VerticalIndicator />
      <div className="flex min-h-full items-center justify-center text-white dark:bg-black">
        {/* <div className={styles.description}>
          <div className={styles.name}>
            <p>I&apos;m Devon Soto</p>
            <div className="flex w-full text-sec">
              <AnimatedText />
            </div>
          </div>
        </div> */}
      </div>

      {/* <Whoami /> */}

      {/* <Timeline /> */}
      {/* 
        <Projects />
        <Technologies /> */}
      {/* <Contact /> */}
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
}
