import styles from "@/styles/timeline.module.css";
import test from "./mockdata.json";

// TODO: Move this to the right place
interface Description {
  title: string;
  description: string[];
  dates?: string;
  image?: any;
  link?: any;
}

interface TimelineProps {
  contentList?: Description;
}

export const Timeline = () => {
  const contentList = test.info;
  // console.log(test);

  return (
    <div className={styles.timeline}>
      <h1 className="text-4xl mb-5">Experiences</h1>
      {/* TODO: Add option to add resume once your resume is complete lol*/}
      {/* <p>
        Download my resume{" "}
        <a href="your_resume.pdf" download>
          <button> Download Resume</button>
        </a>
      </p> */}
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <p className={styles.title}>Workday, Inc</p>
          <p className={styles.date}>
            Boulder, CO, Software Engineer, 2020 - Current
          </p>
          <p className={styles.description}>
            I worked on a key product that many of our users interact with
            immediately upon logging into the platform. One of my main
            accomplishments was helping with a full refactor of the
            product&apos;s codebase. I also implemented a comprehensive testing
            system, which helped to catch issues early and prevent regressions
            as we continued to develop the product.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.title}>Workday, Inc</p>
          <p className={styles.date}>
            Boulder, CO, Software Engineer Intern, 2017 - 2020
          </p>
          <p className={styles.description}>
            As a software engineering intern, I worked on a variety of projects
            that helped me to develop my technical skills and gain practical
            experience in the field. It helped me excel in ReactJS, Emotion and
            user experience. I learned about E2E and CI using Cypress and
            Jenkins. I&apos;m grateful for the opportunity to have worked as a
            software engineering intern.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.title}>Nimb.ly</p>
          <p className={styles.date}>Boulder, CO, Co-Founder, 2018 - 2019</p>
          <p className={styles.description}>
            In this experience, my partner and I created a startup called
            Nimb.ly. To address the challenge of catering business finding
            employees we attempted to create a hiring platform that automated
            the entire recruitment process. We entered a startup challenge
            called New Venture Challenge (NVC), where we placed top 10 out of
            100+ startups and were funded $11,000.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.title}>Harris Corporation</p>
          <p className={styles.date}>
            Colorado Springs, CO, Software Engineer Intern, 2017
          </p>
          <p className={styles.description}>
            Assisted in writing JUnit tests and created a script in Python to
            automatically update JSON files. Created a React site to visually
            display data returned from updated JSON files
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

// circle
// vertical line
// title
// description
// time
// bullet points
// {contentList.map((info, index) => (
//   <>
//     {/* <div className={styles.leftsideContainer}></div> */}
// <div className={styles.rightContainer} key={index}>
//   {/* <div className={styles.circle} /> */}
//   <p className={styles.title}>{contentList[index].title}</p>
//   <p className={styles.description}>
//     {contentList[index].description}
//   </p>
// </div>
//   </>
// ))}
