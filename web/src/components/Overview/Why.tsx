import { Box, Typography } from '@mui/material';

import styles from './Why.module.less';

export const Why = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.relative}>
          <div>
            <img
              src="/assets/upload/intro.png"
              className={styles.introImg}
              alt=""
            />
          </div>
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              The first blockchain smartwatch and wearable device Web3
              applications platform.
            </div>
            <div className={styles.btnWrap}>
              <a href="#">
                <div
                  className={styles.downBtn}
                  onMouseEnter={(event: any) => {
                    if (event.target.children && event.target.children[0])
                      event.target.children[0].children[0].src =
                        '/assets/upload/google1.png';
                  }}
                  onMouseLeave={(event: any) => {
                    if (event.target.children && event.target.children[0])
                      event.target.children[0].children[0].src =
                        '/assets/upload/google.png';
                  }}
                >
                  <div>
                    <img src="/assets/upload/google.png" alt="" />
                  </div>
                  <div>
                    <div className={styles.downTitle}>GET IT ON</div>
                    <div className={styles.downContent}>Google Play</div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div
                  className={styles.downBtn}
                  onMouseEnter={(event: any) => {
                    if (event.target.children && event.target.children[0])
                      event.target.children[0].children[0].src =
                        '/assets/upload/apple1.png';
                  }}
                  onMouseLeave={(event: any) => {
                    if (event.target.children && event.target.children[0])
                      event.target.children[0].children[0].src =
                        '/assets/upload/apple.png';
                  }}
                >
                  <div>
                    <img src="/assets/upload/apple.png" alt="" />
                  </div>
                  <div>
                    <div className={styles.downTitle}>Download on the</div>
                   <a href="https://itunes.apple.com/cn/app/id6479742971?mt=8" target="_blank" > <div className={styles.downContent}>APP Store</div></a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/upload/intro.png"
            className={`${styles.introImg} ${styles.phoneImg}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
