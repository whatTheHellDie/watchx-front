import { Box, Typography } from '@mui/material';

import styles from './LifeStyle.module.less';

export const LifeStyle = () => {
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
          <div className={styles.introWrap}>
            <img
              src="/assets/upload/intro2.png"
              className={styles.topImg}
              alt=""
            />
            <img src="/assets/upload/rect.png" alt="" className={styles.rect} />
            <img
              src="/assets/upload/b3.png"
              className={`${styles.img} ${styles.img3}`}
              alt=""
            />
          </div>
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              <span className={styles.render}>Create a healthy lifestyle</span>{' '}
              for you
            </div>
            <div className={styles.content}>
              Grasp your daily health reports, assisting you with sleep
              management, dietary control, and stress regulation, helping you
              adopt a holistic healthy lifestyle.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
