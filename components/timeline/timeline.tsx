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
  console.log(test);

  return (
    <div className={styles.container}>
      <div className={styles.leftsideContainer}>
        <div className={styles.circle} />
        <div className={styles.verticalbar} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.title}>{contentList[0].title}</div>
        <div className={styles.description}>{contentList[0].description}</div>
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
