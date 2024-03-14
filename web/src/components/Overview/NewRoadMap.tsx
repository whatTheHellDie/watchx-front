import { Box, Typography } from '@mui/material';

import styles from './NewRoadMap.module.less';
const content = [
  'WatchX App Release',
  'Social Media Operations Started ',
  'Southeast Asia MVP Testing',
  'Smartwatch Sale ',
  'Fundraising started',
];
const content1 = [
  'User Reaches 500K ',
  'GameFi Product Launch ',
  'AI Health Product Launch ',
  'Fundraising Completed ',
  'Comprehensive Marketing Campaign Initiated',
];
const content2 = [
  'User Surpasses 2Million ',
  'SocialFi Product Launched ',
  'Platform Product Release ',
  'TGE',
];
export const NewRoadMap = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.nameTitle}>Roadmap</div>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.roadList}>
              <div className={styles.roadItem}>
                <div className={styles.roadInner}>
                  <div className={styles.title}>
                    <span className={styles.render}>
                      Q1,2024 Development & <br />
                      MVP Operations
                    </span>
                  </div>
                  <div className={styles.contentList}>
                    {content.map((item) => {
                      return (
                        <div className={styles.contentItem} key={item}>
                          <div>
                            <div className={styles.before}></div>
                          </div>
                          <div>
                            <div className={styles.rect}></div>
                          </div>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.roadItem}>
                <div className={styles.roadInner}>
                  <div className={styles.title}>
                    <span className={styles.render}>
                      Q2Q3,2024 <br />
                      User Growth & Marketing
                    </span>
                  </div>
                  <div className={styles.contentList}>
                    {content1.map((item) => {
                      return (
                        <div className={styles.contentItem} key={item}>
                          <div>
                            <div className={styles.before}></div>
                          </div>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.roadItem}>
                <div className={styles.roadInner}>
                  <div className={styles.title}>
                    <span className={styles.render}>
                      Q4,2024 <br />
                      Branding &<br /> Platform
                    </span>
                  </div>
                  <div className={styles.contentList}>
                    {content2.map((item) => {
                      return (
                        <div className={styles.contentItem} key={item}>
                          <div>
                            <div className={styles.before}></div>
                          </div>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
