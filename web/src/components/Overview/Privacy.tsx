import { Box, Typography } from '@mui/material';

import styles from './Privacy.module.less';

export const Privacy = () => {
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
          <img
            src="/assets/upload/d1.png"
            className={`${styles.img} ${styles.img3}`}
            alt=""
          />
          <img
            src="/assets/upload/d1.png"
            className={`${styles.img} ${styles.img4}`}
            alt=""
          />
          <img
            src="/assets/upload/d1.png"
            className={`${styles.img} ${styles.img5}`}
            alt=""
          />
        </div>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              ZK-based <span className={styles.render}>privacy protect </span>
            </div>
            <div className={styles.content}>
              Physiological Data , as your crucial private information, We use
              ZK Technology and User Local Self-Custody protecting you from Data
              Leaks Through.
            </div>
          </div>
          <div className={styles.introWrap}>
            <img
              src="/assets/upload/intro3.png"
              className={styles.topImg}
              alt=""
            />
            <img src="/assets/upload/rect.png" alt="" className={styles.rect} />
          </div>
        </div>
      </div>
    </div>
  );
};
