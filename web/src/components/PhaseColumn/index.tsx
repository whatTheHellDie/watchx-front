import styles from './index.module.less';
import { useDispatch } from 'react-redux';
import { warning } from 'web/src/slices/MessagesSlice';
export default function PhaseColumn({ title, innerUrl, url }: any) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={` ${styles.allWrap1}`}></div>
      <div className={styles.allWrap}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            WatchX {title === 'Fusion' ? 'Fusion' : 'Founder'}
          </div>
          <div className={styles.content}>
            <a href={innerUrl}>
              <div className={styles.turnParam}>Parameters</div>
            </a>
            {/* <a
              href={`/Preorder?type=${
                title === 'Fusion' ? 'fusion' : 'founder'
              }`}
            > */}
            <div
              className={styles.btn}
              onClick={() => {
                dispatch(warning('Open soon'));
              }}
            >
              Phase 1
            </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
