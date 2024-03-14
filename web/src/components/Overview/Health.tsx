import { Box, Typography } from '@mui/material';

import styles from './Health.module.less';

export const Health = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div>
          <img
            src="/assets/upload/d1.png"
            className={`${styles.img} ${styles.img1}`}
            alt=""
          />

          <img
            src="/assets/upload/d1.png"
            className={`${styles.img} ${styles.img2}`}
            alt=""
          />
        </div>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              <span className={styles.render}>AI Empowering </span>Your Health
            </div>
            <div className={styles.content}>
              Understand your body better with our AI, offering personalized
              advice and foresight into potential health risks.
            </div>
          </div>
          <div className={styles.introWrap}>
            <img
              src="/assets/upload/intro1.png"
              className={styles.topImg}
              alt=""
            />
            <img src="/assets/upload/rect.png" alt="" className={styles.rect} />
            <img
              src="/assets/upload/b1.png"
              className={`${styles.img} ${styles.img3}`}
              alt=""
            />
            <img
              src="/assets/upload/b2.png"
              className={`${styles.img} ${styles.img4}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
