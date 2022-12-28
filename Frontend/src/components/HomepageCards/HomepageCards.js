import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./HomepageDiv2.module.css";
import { FcMindMap } from "react-icons/fc"
import { SiMinds } from "react-icons/si"
import { BsBarChartLineFill } from "react-icons/bs"
import { ImPower } from "react-icons/im"
import { TbMessageLanguage } from "react-icons/tb"
import { GiDiscussion } from "react-icons/gi"
import { GrUserExpert } from "react-icons/gr"
const HomepageCards = () => {

  return (
    <div className={styles.homepageDiv2}>
      <div className={styles.groupDiv}>
        <div className={styles.list}>
          <div className={styles.div}>
            <b className={styles.creativity}>Creativity</b>
            <div className={styles.youWillGetAChanceOnExper}>
              You will get a chance on experimenting different approaches for
              coding a solution using your creativity!
            </div>

          </div>
          <div className={styles.div1}>
            <b className={styles.languages}>Languages</b>
            <div className={styles.chooseFromPopularProgrammin}>
              Choose from popular programming languages like C++, Java, Python
              and much more!
            </div>
            <TbMessageLanguage
              className={styles.archiveContent1Icon}

            />
          </div>
          <div className={styles.div2}>
            <b className={styles.practice}>Practice</b>
            <div className={styles.challengeYourselfToPractice}>
              <p className={styles.challengeYourselfTo}>
                Challenge yourself to practice everyday!
              </p>
              <p
                className={styles.youWillGet}
              >{`You will get pool of programming questions varying from difficulty levels. `}</p>
            </div>
            <BsBarChartLineFill
              className={styles.chartBar331Icon}
            />
          </div>
          <div className={styles.div3}>
            <b className={styles.languages}>Discussion Forum</b>
            <div className={styles.chooseFromPopularProgrammin}>
              Having any doubts about a coding question? Discuss with your
              fellow coders on our discussion forum platform.
            </div>
            <GiDiscussion
              className={styles.folderFavorite1Icon}
            />
          </div>
          <div className={styles.div4}>
            <b className={styles.confidence}>Confidence</b>
            <div className={styles.boostYourConfidenceBySolvi}>
              Boost your confidence by solving as many as questions you can!
            </div>
            <ImPower className={styles.board21Icon} />
          </div>
          <FcMindMap
            className={styles.archiveContent1Icon}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageCards;