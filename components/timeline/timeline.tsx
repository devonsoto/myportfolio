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
      <h1 className={styles.experiences}>Experiences</h1>
      <p>
        download my resume{" "}
        <a href="your_resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </p>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <p className={styles.title}>Software Engineer at Workday</p>
          <p className={styles.date}>2020 - Current</p>
          <p className={styles.description}>
            I am incredibly grateful for the opportunity to work at Workday,
            where I had the privilege of contributing to the development of
            multiple products that were used by a wide range of clients.
          </p>
        </div>
        <div className={styles.rightContainer}>
          {/* <div className={styles.circle} /> */}
          <p className={styles.title}>Software Engineer Intern at Workday</p>
          <p className={styles.date}>2017 - 2020</p>
          <p className={styles.description}>
            I am incredibly grateful for the opportunity to work at Workday,
            where I had the privilege of contributing to the development of
            multiple products that were used by a wide range of clients.
          </p>
        </div>
        <div className={styles.rightContainer}>
          {/* <div className={styles.circle} /> */}
          <p className={styles.title}>
            Sr Associate Software Development Engineer
          </p>
          <p className={styles.description}>
            I am incredibly grateful for the opportunity to work at Workday,
            where I had the privilege of contributing to the development of
            multiple products that were used by a wide range of clients.
          </p>
        </div>
        <div className={styles.rightContainer}>
          {/* <div className={styles.circle} /> */}
          <p className={styles.title}>
            Sr Associate Software Development Engineer
          </p>
          <p className={styles.description}>
            I am incredibly grateful for the opportunity to work at Workday,
            where I had the privilege of contributing to the development of
            multiple products that were used by a wide range of clients.
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
