import { Box, Typography } from '@mui/material';

import styles from './Smartwear2.module.less';
const list = [{}];
export const Smartwear2 = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>AI-Powered Health services</div>
            <div className={styles.content}>
              Through AI ,know yourself more and achieve a healthier lifestyle.
            </div>
            {/* <div className={styles.moreWrap}>
              <div className={styles.btn}>Learn more</div>
              <div className={styles.btn}>Preorder</div>
            </div> */}
          </div>
        </div>
        <div className={styles.flexWrap}>
          <div className={styles.introWrap}>
            <img
              src="/assets/upload/w3.png"
              className={styles.watchImg}
              alt=""
            />
            <img
              src="/assets/upload/b1.png"
              className={`${styles.img} ${styles.img1}`}
              alt=""
            />
            <img
              src="/assets/upload/b2.png"
              className={`${styles.img} ${styles.img2}`}
              alt=""
            />
          </div>
          <img
            src="/assets/upload/w31.png"
            className={` ${styles.phoneImg}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
