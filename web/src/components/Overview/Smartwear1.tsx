import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {  warning } from 'web/src/slices/MessagesSlice';
import styles from './Smartwear1.module.less';
const list = [{}];
export const Smartwear1 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>WatchX Fusion</div>
            <div className={styles.content}>
              Lightweight. Minimalist. Full touch color screen display.
            </div>
            <div className={styles.moreWrap}>
              <a href="/Fusion">
                <div className={styles.btn}>Learn more</div>
              </a>
              <div
                className={styles.btn}
                onClick={() => {
                  dispatch(warning('Open soon'));
                }}
              >
                Preorder
              </div>
            </div>
          </div>
        </div>
        <div className={styles.introWrap}>
          <img src="/assets/upload/w2.png" className={styles.watchImg} alt="" />
        </div>
      </div>
    </div>
  );
};
