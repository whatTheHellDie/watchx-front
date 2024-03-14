import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { warning } from 'web/src/slices/MessagesSlice';
import styles from './Smartwear.module.less';
const list = [{}];
export const Smartwear = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.relative}>
          <div className={styles.titleWrap}>
            <div className={styles.title}>WatchX Founder</div>
            <div className={styles.content}>
              Titanium. Solar-powered. AI health. Web3.
            </div>
            <div className={styles.moreWrap}>
              <a href="/Product">
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
          <img src="/assets/upload/w1.png" className={styles.watchImg} alt="" />
        </div>
      </div>
    </div>
  );
};
