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
      <div className={styles.container}>
        {/* <div className={styles.verticalbar} /> */}
        {contentList.map((info, index) => (
          <>
            {/* <div className={styles.leftsideContainer}></div> */}
            <div className={styles.rightContainer} key={index}>
              {/* <div className={styles.circle} /> */}
              <div className={styles.title}>{contentList[index].title}</div>
              <div className={styles.description}>
                {contentList[index].description}
              </div>
            </div>
          </>
        ))}
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
