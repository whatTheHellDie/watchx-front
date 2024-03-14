import { Box, Typography } from '@mui/material';

import styles from './How.module.less';
console.log(styles);
const list = [
  {
    title: 'ZK-based Privacy Protect',
    content:
      'Physiological Data , as your crucial private information. We use Zero-knowledge Proof Technology and User Local Self-Custody to protect you from privacy leaks.',
    img: (
      <div className={styles.imgWrap}>
        <img src={`/assets/upload/a1.png`} alt="" className={styles.img} />
      </div>
    ),
  },
  {
    title: 'Potential Benefits',
    content:
      'Genesis NFT tokens will bring airdrops . Your proactive health actions will be rewarded with tokens.',
    img: (
      <div className={`${styles.imgWrap} ${styles.imgWrap1}`}>
        <div>
          <img
            src={`/assets/upload/a2.png`}
            alt=""
            className={`${styles.img} ${styles.img1}`}
          />
        </div>
      </div>
    ),
  },
];
const list1 = [
  {
    title: 'Intergrated Payment Network',
    content:
      'Each smartwatch acts as a blockchain wallet while also possessing a traditional bank account.',
    img: (
      <div className={styles.imgWrap}>
        <img
          src={`/assets/upload/a3.png`}
          alt=""
          className={`${styles.img} ${styles.img3}`}
        />
      </div>
    ),
  },
  {
    title: 'Open Platform',
    content: `We offer convenient technical toolkits and development environments, allowing wearable device manufacturers easy integration. And developers can effortlessly develop various health , financial ,gaming and other Dapps.`,
    img: (
      <div className={styles.imgWrap}>
        <img
          src={`/assets/upload/a4.png`}
          alt=""
          className={`${styles.img} ${styles.img4}`}
        />
      </div>
    ),
  },
];
export const How = () => {
  return (
    <div>
      <div className={styles.list}>
        {list.map((item, index) => {
          return (
            <div className={styles.item} key={item.title}>
              <div className={styles.phoneWrap}>
                <div className={styles.topWrap}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
                {item.img}
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.list} ${styles.list1}`}>
        {list1.map((item, index) => {
          return (
            <div className={styles.item} key={item.title}>
              <div className={styles.phoneWrap}>
                <div className={styles.topWrap}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
                {item.img}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
